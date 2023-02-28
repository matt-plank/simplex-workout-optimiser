import { useState } from "react";
import SelectorInput from "../components/selector/selectorInput";

const useExercises = () => {
  const [exercises, setExercises] = useState(["Select"]);

  const newExercise = () => {
    setExercises((currentExercises) => {
      return [...currentExercises, "Select"];
    });
  };

  const removeExercise = (exerciseIndex) => {
    setExercises((currentExercises) => {
      if (currentExercises.length === 1) return currentExercises;

      const result = [...currentExercises];

      result.splice(exerciseIndex, 1);

      return result;
    });
  };

  const exerciseElements = exercises.map((exercise, i) => {
    const removeFunction = () => {
      removeExercise(i);
    };

    const updateFunction = (e) => {
      setExercises((currentExercises) => {
        const result = [...currentExercises];

        result[i] = e.target.value;

        return result;
      });
    };

    const addFunction = (e) => {
      setExercises((currentExercises) => {
        const result = [...currentExercises];

        result.splice(i + 1, 0, "Select");

        return result;
      });
    };

    return (
      <SelectorInput
        key={i}
        selected={exercise}
        addFunction={addFunction}
        removeFunction={removeFunction}
        updateFunction={updateFunction}
      />
    );
  });

  return [exerciseElements, newExercise];
};

export default useExercises;
