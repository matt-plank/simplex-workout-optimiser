import { AiOutlinePlus } from "react-icons/ai";

const SelectorInput = () => {
  return (
    <div className="selector-input">
      <button className="new-row">
        <AiOutlinePlus />
      </button>
      <input type="text" placeholder="Exercise Name" />
      <input type="text" placeholder="Muscle Groups" />
    </div>
  );
};

export default SelectorInput;
