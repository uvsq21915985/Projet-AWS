from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    username = models.CharField(max_length=150, unique=False, blank=True, null=True)  
    email = models.EmailField(unique=True)  

    USERNAME_FIELD = 'email'  
    REQUIRED_FIELDS = []  

    def __str__(self):
        return self.email

    class Meta:
        db_table = 'user'

class CustomReunion(models.Model):
    name = models.CharField(max_length=200, unique=False, blank=True, null=True)  
    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    begin_time = models.DateTimeField()
    end_time = models.DateTimeField()
    num_participants =  models.PositiveIntegerField()
    duration =  models.DurationField()
    
    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'reunion'