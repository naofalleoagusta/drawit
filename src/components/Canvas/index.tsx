import useCanvas from "hooks/useCanvas";

const Canvas = () => {
  const canvasRef = useCanvas();
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
    />
  );
};

export default Canvas;
