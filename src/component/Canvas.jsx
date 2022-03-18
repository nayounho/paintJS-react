import { useEffect, useRef, useState } from "react";
import styles from "../style/Canvas.module.css";

const Canvas = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);

  const INITIAL_SIZE = 500;

  const [ctx, setCtx] = useState();
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = INITIAL_SIZE;
    canvas.height = INITIAL_SIZE;

    const context = canvas.getContext("2d");
    context.strokeStyle = "black";
    context.lineWidth = 2.5;
    contextRef.current = context;

    setCtx(context);
  }, []);

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

  return (
    <canvas
      className={styles.canvas}
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseMove={drawing}
      onMouseLeave={finishDrawing}
    ></canvas>
  );
};

export default Canvas;
