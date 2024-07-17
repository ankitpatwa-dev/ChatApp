from django.urls import path, re_path
from . import views
from . import consumer as consumers
from django.conf import settings
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('',views.home,name='home'),
    path('register/', views.UserCreate.as_view(), name='register'),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('people/', views.PeopleViewSet.as_view(), name='people'),
]

websocket_urlpatterns = [
    path('ws/chat/<room_name>', consumers.ChatConsumer.as_asgi()),
]