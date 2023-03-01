import json

import numpy as np
import scipy
from rest_framework.decorators import api_view
from rest_framework.response import Response

from . import models


@api_view(["POST"])
def create_optimised_workout(request):
    """Create a new "optimised workout"."""
    exercises: list[str] = json.loads(request.body)

    muscle_groups = models.MuscleGroup.objects.all()

    # Formulate constraints for linear program
    constrain_sets_per_muscle = np.zeros((len(muscle_groups), len(exercises)))

    for i, exercise in enumerate(exercises):
        for j, muscle_group in enumerate(muscle_groups):
            exercises_for_muscle_group = [exercise.name for exercise in muscle_group.exercises.all()]
            if exercise in exercises_for_muscle_group:
                constrain_sets_per_muscle[j][i] = 1

    constrain_sets_per_exercise = np.zeros((len(exercises), len(exercises)))
    for i, exercise in enumerate(exercises):
        constrain_sets_per_exercise[i][i] = 1

    sets_per_muscle_limit = np.ones((len(muscle_groups), 1)) * 16
    sets_per_exercise_limit = np.ones((len(exercises), 1)) * 6

    # Formulate objective function for linear program
    objective_function = np.random.random((len(exercises), 1))

    # Solve linear program
    constraints = np.vstack((constrain_sets_per_muscle, constrain_sets_per_exercise))
    constraint_limits = np.vstack((sets_per_muscle_limit, sets_per_exercise_limit))
    result = scipy.optimize.linprog(-objective_function, A_ub=constraints, b_ub=constraint_limits).x

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
