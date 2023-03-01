import numpy as np
import scipy

from . import models


def constraints_sets_per_muscle(exercises, muscle_groups):
    coefficients = np.zeros((len(muscle_groups), len(exercises)))

    for i, exercise in enumerate(exercises):
        for j, muscle_group in enumerate(muscle_groups):
            exercises_for_muscle_group = [exercise.name for exercise in muscle_group.exercises.all()]
            if exercise in exercises_for_muscle_group:
                coefficients[j][i] = 1

    constraints = np.ones((len(muscle_groups), 1)) * 8

    return coefficients, constraints


def constraints_sets_per_exercise(exercises, max_sets_default=6, max_sets_compound=4):
    coefficients = np.zeros((len(exercises), len(exercises)))
    constraints = np.ones((len(exercises), 1))

    for i, exercise in enumerate(exercises):
        exercise_model = models.Exercise.objects.filter(name=exercise).first()

        if exercise_model.heavy_compound:
            constraints[i][0] = max_sets_compound
            coefficients[i][i] = 1
        else:
            constraints[i][0] = max_sets_default
            coefficients[i][i] = 2

    return coefficients, constraints


def bounds_sets_per_exercise(exercises):
    bounds = []

    for exercise_name in exercises:
        exercise = models.Exercise.objects.filter(name=exercise_name).first()

        bounds.append((2, 4))

    return bounds


def optimise(exercises):
    muscle_groups = models.MuscleGroup.objects.all()

    parameters = [
        constraints_sets_per_muscle(exercises, muscle_groups),
        # constraints_sets_per_exercise(exercises),
    ]

    # Objective functiuon
    objective_function = -np.ones((len(exercises), 1))

    # Solve linear program
    constraints = np.vstack(tuple(parameter[0] for parameter in parameters))
    constraint_limits = np.vstack(tuple(parameter[1] for parameter in parameters))
    result = scipy.optimize.linprog(objective_function, A_ub=constraints, b_ub=constraint_limits, bounds=bounds_sets_per_exercise(exercises)).x

    return result
