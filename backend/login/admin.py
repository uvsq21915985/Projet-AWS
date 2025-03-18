from django.contrib import admin
from .models import CustomUser
from django.contrib.auth.admin import UserAdmin

class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'is_staff', 'is_active']
    ordering = ['email']

admin.site.register(CustomUser, CustomUserAdmin)
