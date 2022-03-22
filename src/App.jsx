import { Fragment, useState } from "react";
import "./App.css";
import Button from "./component/Button";
import Canvas from "./component/Canvas";
import Colors from "./component/Colors";
import Range from "./component/Range";

function App() {
  const [lineSize, setLineSize] = useState(3.5);
  const [color, setColor] = useState("black");
  const [filling, setFilling] = useState(false);

  return (
    <Fragment>
      <Canvas lineSize={lineSize} color={color} filling={filling} />
      <Range lineSize={lineSize} setLineSize={setLineSize} />
      <Button filling={filling} setFilling={setFilling} />
      <Colors setColor={setColor} />
    </Fragment>
  );
}

export default App;
