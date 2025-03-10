from django.urls import path
from .views import register_user, user_login, user_logout,validate_token, refresh_token,create_reunion,get_user_reunions
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    #path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('validate/', validate_token, name='validate'),
    path('refresh/', refresh_token, name='refresh'),
    path('createreunion/', create_reunion, name='create-reunion'),
    path('reunions/', get_user_reunions, name='reunions'),
]
