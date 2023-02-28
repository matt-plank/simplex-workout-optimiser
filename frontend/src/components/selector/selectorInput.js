import { AiFillDelete, AiFillPlusSquare } from "react-icons/ai";

import "./selectorInput.css";

const SelectorInput = ({ exercises, selected, sets, addFunction, removeFunction, updateFunction }) => {
  return (
    <div className="selector-input">
      <button onClick={addFunction}>
        <AiFillPlusSquare />
      </button>

      <select value={selected} onChange={updateFunction}>
        <option value="">Select</option>
        {exercises.map((exercise, i) => (
          <option key={i} value={exercise}>
            {exercise}
          </option>
        ))}
      </select>

      <input type="text" placeholder="Sets" value={sets} />

      <button onClick={removeFunction} className="remove">
        <AiFillDelete />
      </button>
    </div>
  );
};

export default SelectorInput;
