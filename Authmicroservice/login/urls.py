from django.urls import path
from .views import register_user, user_login, user_logout,validate_token, refresh_token
from .user_views import update_user,update_password
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    #path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    path('register/', register_user, name='register'),
    path('login/', user_login, name='login'),
    path('logout/', user_logout, name='logout'),
    path('validate/', validate_token, name='validate'),
    path('refresh/', refresh_token, name='refresh'),
    path('update_user/', update_user, name='update_user'),
    path('update_password/', update_password, name='update_password'),
]
