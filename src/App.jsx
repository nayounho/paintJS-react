import { Fragment } from "react";
import "./App.css";
import Button from "./component/Button";
import Canvas from "./component/Canvas";
import Colors from "./component/Colors";
import Range from "./component/Range";

function App() {
  return (
    <Fragment>
      <Canvas />
      <Range />
      <Button />
      <Colors />
    </Fragment>
  );
}

export default App;
