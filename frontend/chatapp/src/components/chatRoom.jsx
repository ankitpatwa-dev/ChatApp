// src/components/ChatRoom.js
import React, { useEffect, useState } from 'react';
import useWebSocket from '../services/webSocket';

const ChatRoom = (props) => {
    // const { messages, sendMessage } = useWebSocket(`ws://localhost:8000/ws/chat/${props?.match.params.roomName}/`);
    const { messages, sendMessage } = useWebSocket(`ws://localhost:8000/ws/chat/ak`);
    const [newMessage, setNewMessage] = useState('');
    const [roomName, setRoomName] = useState('');
    useEffect(()=>{
        console.log('props.match.params.roomName',props.match?.params?.roomName);
        setRoomName(props.match?.params?.roomName)
    },[])
    const handleSend = () => {
        sendMessage(newMessage);
        setNewMessage('');
    };

    return (
        <div>
            <div className="message-list">
                {messages.map((message, index) => (
                    <div key={index}>{message}</div>
                ))}
            </div>
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default ChatRoom;
