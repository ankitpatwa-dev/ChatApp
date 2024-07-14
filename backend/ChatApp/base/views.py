from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from django.contrib.auth.models import User
from .serializers import UserSerializer , PeopleSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
# Create your views here.
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication

def home(request):
    return HttpResponse('Testing')



class UserCreate(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class PeopleViewSet(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    def get(self, request, *args, **kwargs):
        print(request.user)
        people_serializers = False
        if (kwargs.get('id')):
            pass
            # products = self.getProductCategoryWise(kwargs.get('category_id'))
        else:
            people = User.objects.filter(is_staff=False, is_superuser=False, is_active=True)
        if people:
            people_serializers = PeopleSerializer(people, many=True)

        return Response({
            'status': 200,
            'people': people_serializers.data if people_serializers else [],
        })