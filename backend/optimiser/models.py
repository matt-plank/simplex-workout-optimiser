from django.db import models


class MuscleGroup(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name


class DisplayGroup(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name


# Create your models here.
class Exercise(models.Model):
    name = models.CharField(max_length=60)
    display_group = models.ManyToManyField(DisplayGroup)
    muscle_group = models.ManyToManyField(MuscleGroup, related_name="exercises")

    def __str__(self):
        return self.name
