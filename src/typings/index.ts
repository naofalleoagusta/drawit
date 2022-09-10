export type CoordinateType = {
  x: number;
  y: number;
};

export const SIZES = [5, 10, 15] as const;

export type SizeType = typeof SIZES[number];

export const COLORS = ["red", "yellow", "black", "green", "blue"] as const;

export type ColorType = typeof COLORS[number] | string;
