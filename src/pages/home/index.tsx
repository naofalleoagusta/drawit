import React from "react";

import Canvas from "components/Canvas";
import CanvasProvider from "context/CanvasProvider";
import DrawHolder from "components/DrawHolder";

const Home = () => {
  return (
    <CanvasProvider>
      <div className="relative">
        <Canvas />
        <DrawHolder />
      </div>
    </CanvasProvider>
  );
};

export default Home;
