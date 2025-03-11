import datetime

from channels.generic.websocket import AsyncWebsocketConsumer
import json
from .models import *
from django.contrib.auth.models import User
# from django.utils.asyncio import sync_to_async
from asgiref.sync import sync_to_async
from .serializers import MessageSerializer



class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = f"chat_{self.room_name}"

        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()


        serialized_message = await self.serialize_message(many=True)
        print(serialized_message)

        await self.send(text_data=json.dumps({
            'all_message': serialized_message
        }))

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        user_id = text_data_json.get('user_id')
        if (user_id):
            msg = await self.save_message(message,user_id)
            serialized_message = await self.serialize_message(msg)
            print('message',type(msg),serialized_message)
            # message_id = msg.split(' ')[0]

            await self.channel_layer.group_send(
                self.room_group_name,
                {
                    'type': 'chat_message',
                    'message': serialized_message,
                }
            )

    @sync_to_async
    def save_message(self, message,user_id):
        room = ChatRoom.objects.filter(name=self.room_name)
        user_id = User.objects.get(id=user_id)
        obj = Message.objects.create(user=user_id,room=room[0],content=message)
        print('objj',obj)
        return obj

    @sync_to_async
    def serialize_message(self, message=False,many=False):
        if many:
            room = ChatRoom.objects.filter(name=self.room_name)
            ordered_messages = Message.objects.filter(room = room[0].id).order_by('-timestamp')[:10]
            serializer = MessageSerializer(ordered_messages, many=True)
            return serializer.data
            # return
        serializer = MessageSerializer(message)
        return serializer.data

    async def chat_message(self, event):
        message = event['message']

        await self.send(text_data=json.dumps({
            'content': message.get('content'),
            'timestamp':message.get('timestamp'),
            'user':message.get('user'),
        }))
