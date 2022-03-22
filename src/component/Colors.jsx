import "../style/Colors.css";

const Colors = ({ setColor }) => {
  const changeColorHandler = (e) => {
    const currentColor = e.target.style.backgroundColor;
    setColor(currentColor);
  };
  return (
    <div className="controls_color" onClick={changeColorHandler}>
      <div className="jsColor" style={{ backgroundColor: "#2c2c2c" }}></div>
      <div className="jsColor" style={{ backgroundColor: "white" }}></div>
      <div className="jsColor" style={{ backgroundColor: "#ff3b30" }}></div>
      <div className="jsColor" style={{ backgroundColor: "#ff9500" }}></div>
      <div className="jsColor" style={{ backgroundColor: "#ffcc00" }}></div>
      <div className="jsColor" style={{ backgroundColor: "#4cb963" }}></div>
      <div className="jsColor" style={{ backgroundColor: "#5ac8fa" }}></div>
      <div className="jsColor" style={{ backgroundColor: "#0579ff" }}></div>
    </div>
  );
};

export default Colors;
