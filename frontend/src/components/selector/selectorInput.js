const SelectorInput = ({ sets }) => {
  return (
    <div className="selector-input">
      <select>
        <option value="">Select</option>
        <optgroup label="Push">
          <option value="">Bench Press</option>
          <option value="">Dumbbell Incline Press</option>
          <option value="">Shoulder Press</option>
          <option value="">Dips</option>
          <option value="">Cable Flys</option>
          <option value="">Tricep Pushdown</option>
        </optgroup>
        <optgroup label="Pull">
          <option value="">Pull-ups</option>
          <option value="">Chin-ups</option>
          <option value="">Lat Pulldown</option>
          <option value="">Cable Rows</option>
          <option value="">Lateral Raises</option>
          <option value="">Seated Lateral Raises</option>
          <option value="">Face Pulls</option>
        </optgroup>
        <optgroup label="Legs">
          <option value="">Squats</option>
          <option value="">Bulgarian Split Squats</option>
          <option value="">Lunges</option>
          <option value="">RDLs</option>
          <option value="">Leg Extensions</option>
          <option value="">Hamstring Curls</option>
          <option value="">Calf Raises</option>
        </optgroup>
      </select>

      <input type="text" placeholder="Sets" value={sets} />
    </div>
  );
};

export default SelectorInput;
