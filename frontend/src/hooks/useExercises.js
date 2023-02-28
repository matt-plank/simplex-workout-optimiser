import { useState } from "react";
import SelectorInput from "../components/selector/selectorInput";

const useExercises = (exerciseSelection) => {
  const [exercises, setExercises] = useState(["Select"]);
  const [sets, setSets] = useState([]);

  const exerciseElements = exercises.map((exercise, i) => {
    const removeFunction = () => {
      setExercises((currentExercises) => {
        if (currentExercises.length === 1) return currentExercises;

        const result = [...currentExercises];

        result.splice(i, 1);

        return result;
      });
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
        exercises={exerciseSelection}
        key={i}
        selected={exercise}
        addFunction={addFunction}
        removeFunction={removeFunction}
        updateFunction={updateFunction}
        sets={displaySets}
      />
    );
  });

  return [exercises, exerciseElements, setSets];
};

export default useExercises;
