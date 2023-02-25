import "./selector.css";
import SelectorInput from "./selectorInput";

const Selector = () => {
  return (
    <div className="selector-wrapper">
      <div className="selector">
        <SelectorInput />

        <button className="submit">Optimise</button>
      </div>
    </div>
  );
};

export default Selector;
