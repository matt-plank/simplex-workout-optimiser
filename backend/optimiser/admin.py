from django.contrib import admin

from . import models

admin.site.register(models.Exercise)
admin.site.register(models.MuscleGroup)
admin.site.register(models.DisplayGroup)
