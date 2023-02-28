import json

from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["POST"])
def create_optimised_workout(request):
    """Create a new "optimised workout"."""
    request_json: list[str] = json.loads(request.body)

    response: list[int] = []

    for exercise in request_json:
        response.append(10)

    return Response(response)
