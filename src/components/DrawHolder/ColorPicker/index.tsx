import React, { useContext } from "react";

import CanvasContext from "context/CanvasProvider/CanvasContext";

import { COLORS, ColorType, } from "typings";

const ColorPicker = () => {
  const { color, setColor } = useContext(CanvasContext);
  const handleChangeColor = (color: ColorType) => {
    setColor(color);
  };
  return;
  <div className="aligned-flex-row">
{COLORS.map(colorVariant=>)}
  </div>;
};

export default ColorPicker;
