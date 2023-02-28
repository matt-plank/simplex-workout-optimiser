import useExercises from "../../hooks/useExercises";
import useFetchExercises from "../../hooks/useFetchExercises";
import "./selector.css";

const Selector = () => {
  const exerciseSelection = useFetchExercises();
  const [exercises, exerciseElements, setSets] = useExercises(exerciseSelection);

  const fetchOptimisedWorkout = async () => {
    const response = await fetch("http://localhost:8000/optimised_workout", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercises),
    });

    const jsonResponse = await response.json();

    setSets(jsonResponse);
  };

  return (
    <div className="selector-wrapper">
      <div className="selector">
        {exerciseElements}

        <button className="submit" onClick={fetchOptimisedWorkout}>
          Optimise
        </button>
      </div>
    </div>
  );
};

export default Selector;
