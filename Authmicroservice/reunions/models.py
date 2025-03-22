from django.db import models
from login.models import CustomUser
from datetime import timedelta
from django.utils import timezone


class CustomReunion(models.Model):
    creator = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    begin_time = models.DateTimeField(blank=False, null=False)
    end_time = models.DateTimeField(blank=True, null=True)
    num_participants = models.PositiveIntegerField()
    duration = models.DurationField(blank=True, null=True)
    room_id = models.BigIntegerField(unique=True, blank=False, null=False)

    def str(self):
        return self.name

    def compute_and_save_duration(self):
        if self.end_time:
            self.duration = self.end_time - self.begin_time
            self.save(update_fields=['duration'])
        else:
            self.duration = None
            self.save(update_fields=['duration'])

    def save(self, args, **kwargs):
        if self.end_time:
            self.duration = self.end_time - self.begin_time
        super().save(args, **kwargs)

    class Meta:
        db_table = 'reunion'