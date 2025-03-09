from django.urls import path
from .views import register_user, user_login, user_logout,validate_token
from django.contrib import admin
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),  
    path('register/', register_user, name='register'),
     path('login/', user_login, name='login'),
     path('logout/', user_logout, name='logout'),
      path('validate/', validate_token, name='validate'),
]
