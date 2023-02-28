import { useState } from "react";
import SelectorInput from "../components/selector/selectorInput";

const useExercises = () => {
  const [exercises, setExercises] = useState(["Select"]);
  const [sets, setSets] = useState([]);

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

    let displaySets = "";
    if (sets[i]) displaySets = sets[i];

    return (
      <SelectorInput
        key={i}
        selected={exercise}
        addFunction={addFunction}
        removeFunction={removeFunction}
        updateFunction={updateFunction}
        sets={displaySets}
      />
    );
  });

  return [exercises, setSets, exerciseElements];
};

export default useExercises;
