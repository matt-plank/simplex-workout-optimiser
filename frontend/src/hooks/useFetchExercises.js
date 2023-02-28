import { useEffect, useState } from "react";

const useFetchExercises = () => {
  const [exerciseSelection, setExerciseSelection] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await fetch("http://localhost:8000/exercise");
      const exercises = await response.json();

      setExerciseSelection(exercises);
    };

    fetchExercises();
  }, []);

  return exerciseSelection;
};

export default useFetchExercises;
