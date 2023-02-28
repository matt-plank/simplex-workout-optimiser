import json

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def create_optimised_workout(request):
    """Create a new "optimised workout"."""
    request_json: list = json.loads(request.body)

    # request_json = [{"name": "..."}]

    for i, exercise in enumerate(request_json):
        exercise["sets"] = 10

        request_json[i] = exercise

    return Response(request_json)
