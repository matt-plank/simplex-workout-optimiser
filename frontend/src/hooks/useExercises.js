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

    return (
      <SelectorInput key={i} selected={exercise} removeFunction={removeFunction} updateFunction={updateFunction} />
    );
  });

  return [exerciseElements, newExercise];
};

export default useExercises;
