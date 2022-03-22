import { useEffect, useRef, useState } from "react";
import styles from "../style/Canvas.module.css";

const Canvas = ({ lineSize, color, filling, setImageUrl }) => {
  const canvasRef = useRef(null);

  const CANVAS_SIZE = 500;
  const INITIAL_COLOR = "#2c2c2c";

  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;

    context.fillStyle = "white";
    context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    context.strokeStyle = INITIAL_COLOR;
    context.lineWidth = "3.5";

    setCtx(context);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = lineSize;
    context.strokeStyle = color;
  }, [lineSize, color, filling]);

  const startDrawing = () => {
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    setIsDrawing(false);
  };

  const drawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (ctx) {
      if (!isDrawing) {
        ctx.beginPath();
        ctx.moveTo(offsetX, offsetY);
      } else {
        ctx.lineTo(offsetX, offsetY);
        ctx.stroke();
      }
    }
  };

  const clickCanvasHandler = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = color;
    if (filling) context.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  };

  return (
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={drawing}
      onMouseLeave={finishDrawing}
      onClick={clickCanvasHandler}
    ></canvas>
  );
};

export default Canvas;
