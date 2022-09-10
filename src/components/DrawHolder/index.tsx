import React, { useContext } from "react";

import CanvasContext from "context/CanvasProvider/CanvasContext";

import { ColorType, COLORS, SizeType, SIZES } from "typings";

const DrawHolder = () => {
  const { color, setColor, size, setSize } = useContext(CanvasContext);
  const handleChangeColor = (color: ColorType) => {
    setColor(color);
  };
  const handleChangeSize = (size: SizeType) => {
    setSize(size);
  };

  return (
    <div className="aligned-flex-row gap-x-4 w-96">
    </div>
  );
};

export default DrawHolder;
