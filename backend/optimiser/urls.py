from django.urls import path

from . import views

urlpatterns = [
    path("optimised_workout", views.create_optimised_workout),
    path("exercise", views.get_exercises_in_groups),
]
