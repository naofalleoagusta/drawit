import React, { useState } from "react";
import { ColorType, SizeType } from "typings";
import CanvasContext from "./CanvasContext";

type CanvasProviderProps = {
  children: React.ReactNode;
};

const CanvasProvider = ({ children }: CanvasProviderProps) => {
  const [color, setColor] = useState<ColorType>("red");
  const [size, setSize] = useState<SizeType>(5);
  return (
    <CanvasContext.Provider
      value={{
        color,
        size,
        setColor,
        setSize,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
