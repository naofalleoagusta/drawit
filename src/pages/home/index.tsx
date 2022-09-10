import React from "react";

import Canvas from "components/Canvas";
import CanvasProvider from "context/CanvasProvider";

const Home = () => {
  return (
    <CanvasProvider>
      <Canvas />
    </CanvasProvider>
  );
};

export default Home;
