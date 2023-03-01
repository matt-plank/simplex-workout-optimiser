import json

import numpy as np
import scipy
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import models
from .optimise import optimise


@api_view(["POST"])
def create_optimised_workout(request):
    """Create a new "optimised workout"."""
    exercises: list[str] = json.loads(request.body)

    result = optimise(exercises)

    return Response(result.tolist())


@api_view(["GET"])
def get_exercises_in_groups(request):
    """List available exercises."""
    groups = models.DisplayGroup.objects.all()

    response: list[dict] = []

    for group in groups:
        exercises = models.Exercise.objects.filter(display_group=group).all()

        response.append(
            {
                "group": group.name,
                "exercises": [exercise.name for exercise in exercises],
            }
        )

    return Response(response)
