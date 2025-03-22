from django.urls import path
from .views import create_reunion, get_user_reunions, end_reunion
from django.contrib import admin

urlpatterns = [
    path('create_reunion/', create_reunion, name='create-reunion'),
    path('end_reunion/', end_reunion, name='end-reunion'),
    path('get_reunions/', get_user_reunions, name='get_reunions'),
]