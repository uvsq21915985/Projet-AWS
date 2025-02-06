from django.contrib.auth.models import AbstractUser
from django.db import models


class CustomUser(AbstractUser):
    first_name = models.CharField(max_length=255, null=False, blank=False)
    last_name  = models.CharField(max_length=255, null=False, blank=False)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username

    class Meta:
            db_table = 'user'

