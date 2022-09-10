import { createContext } from "react";
import { ColorType, SizeType } from "typings";

type CanvasContextType = {
  size: SizeType;
  color: ColorType;
  setSize: React.Dispatch<React.SetStateAction<SizeType>>;
  setColor: React.Dispatch<React.SetStateAction<ColorType>>;
};

const CanvasContext = createContext<CanvasContextType>({
  color: "red",
  size: 5,
  setColor: () => {},
  setSize: () => {},
});

export default CanvasContext;
