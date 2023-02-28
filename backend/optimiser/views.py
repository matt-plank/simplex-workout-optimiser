import json

from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import models


@api_view(["POST"])
def create_optimised_workout(request):
    """Create a new "optimised workout"."""
    request_json: list[str] = json.loads(request.body)

    response: list[int] = []

    for exercise in request_json:
        response.append(10)

    return Response(response)


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
