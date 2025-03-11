from django.db import models
from login.models import CustomUser
# Create your models here.
class CustomReunion(models.Model):
    name = models.CharField(max_length=500, unique=False, blank=True, null=True)  
    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    begin_time = models.DateTimeField()
    end_time = models.DateTimeField()
    num_participants =  models.PositiveIntegerField()
    duration =  models.DurationField()
    
    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'reunion'