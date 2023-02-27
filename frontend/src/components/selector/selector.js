import "./selector.css";
import SelectorInput from "./selectorInput";

const Selector = () => {
  return (
    <div className="selector-wrapper">
      <div className="selector">
        <SelectorInput />

        <button className="new-row">New Exercise</button>
        <button className="submit">Optimise</button>
      </div>
    </div>
  );
};

export default Selector;
