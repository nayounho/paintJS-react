import "../style/Button.css";

const Button = ({ filling, setFilling }) => {
  const changeModeHandler = () => {
    setFilling((pre) => !pre);
  };
  return (
    <div className="btn__layout">
      <button className="btn__layout button" onClick={changeModeHandler}>
        {filling ? "Paint" : "Fill"}
      </button>
      <button className="btn__layout button">Save</button>
    </div>
  );
};

export default Button;
