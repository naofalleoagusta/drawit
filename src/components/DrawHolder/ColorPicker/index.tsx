import { useContext } from "react";

import CanvasContext from "context/CanvasProvider/CanvasContext";

import { COLORS, ColorType } from "typings";

const ColorPicker = () => {
  const { color, setColor } = useContext(CanvasContext);
  const handleChangeColor = (paramColor: ColorType) => {
    if (color !== paramColor) {
      setColor(paramColor);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {COLORS.map((colorVariant, key) => {
        return (
          <div
            key={`${colorVariant}-${key}`}
            className="p-1 w-11 h-11 cursor-pointer rounded-full"
            {...(color === colorVariant && {
              style: {
                border: `2px solid ${colorVariant}`,
              },
            })}
            onClick={() => {
              handleChangeColor(colorVariant);
            }}
          >
            <div
              className="w-full h-full rounded-full"
              style={{
                backgroundColor: colorVariant,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ColorPicker;
