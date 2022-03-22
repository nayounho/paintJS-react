import "../style/Range.css";

const Range = ({ lineSize, setLineSize }) => {
  const handleRangeChange = (e) => {
    const lineRate = e.target.valueAsNumber;
    setLineSize(lineRate);
  };

  return (
    <div className="range">
      <input
        type="range"
        id="jsRange"
        min={0.5}
        max={10}
        step={0.2}
        defaultValue={lineSize}
        onClick={handleRangeChange}
      />
      <span className="range_text">{lineSize}</span>
    </div>
  );
};

export default Range;
