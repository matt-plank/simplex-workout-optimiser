import { AiFillDelete } from "react-icons/ai";

const SelectorInput = ({ selected, sets, removeFunction, updateFunction }) => {
  return (
    <div className="selector-input">
      <select value={selected} onChange={updateFunction}>
        <option value="">Select</option>
        <optgroup label="Push">
          <option value="Bench Press">Bench Press</option>
          <option value="Incline Dumbbell Press">Incline Dumbbell Press</option>
          <option value="Shoulder Press">Shoulder Press</option>
          <option value="Dips">Dips</option>
          <option value="Cable Flys">Cable Flys</option>
          <option value="Tricep Pushdown">Tricep Pushdown</option>
        </optgroup>
        <optgroup label="Pull">
          <option value="Pull-ups">Pull-ups</option>
          <option value="Chin-ups">Chin-ups</option>
          <option value="Lat Pulldown">Lat Pulldown</option>
          <option value="Cable Rows">Cable Rows</option>
          <option value="Lateral Raises">Lateral Raises</option>
          <option value="Seated Lateral Raises">Seated Lateral Raises</option>
          <option value="Face Pulls">Face Pulls</option>
        </optgroup>
        <optgroup label="Legs">
          <option value="Squats">Squats</option>
          <option value="Bulgarian Split Squats">Bulgarian Split Squats</option>
          <option value="Lunges">Lunges</option>
          <option value="RDLs">RDLs</option>
          <option value="Leg Extensions">Leg Extensions</option>
          <option value="Hamstring Curls">Hamstring Curls</option>
          <option value="Calf Raises">Calf Raises</option>
        </optgroup>
      </select>

      <input type="text" placeholder="Sets" value={sets} />

      <button onClick={removeFunction}>
        <AiFillDelete />
      </button>
    </div>
  );
};

export default SelectorInput;
