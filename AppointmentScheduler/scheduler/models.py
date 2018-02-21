from django.db import models

# Create your models here.

class Appointment(models.Model):
    date = models.CharField(max_length=260)
    time = models.CharField(max_length=10)
    description = models.CharField(max_length=260)
