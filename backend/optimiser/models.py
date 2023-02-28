from django.db import models


# Create your models here.
class Exercise(models.Model):
    name = models.CharField(max_length=60)
    display_group = models.CharField(max_length=60)
