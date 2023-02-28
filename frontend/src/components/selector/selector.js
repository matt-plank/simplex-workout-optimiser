import useExercises from "../../hooks/useExercises";
import "./selector.css";

const Selector = () => {
  const [exercises, newExercise] = useExercises();

  return (
    <div className="selector-wrapper">
      <div className="selector">
        {exercises}

        <button className="new-row" onClick={newExercise}>
          New Exercise
        </button>
        <button className="submit">Optimise</button>
      </div>
    </div>
  );
};

export default Selector;
