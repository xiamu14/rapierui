export type Size =
  | {
      width: string;
      height: string;
    }
  | {
      side: string;
    };

export type BoxSizing = "border" | "content";

export interface Path<ValueType> {
  top?: ValueType;
  right?: ValueType;
  bottom?: ValueType;
  left?: ValueType;
}

export interface Corner {
  topLeft?: string;
  topRight?: string;
  bottomLeft?: string;
  bottomRight?: string;
}

export interface BorderAttributes {
  width?: string | Path<string>;
  style?: BorderStyle | Path<BorderStyle>;
  color?: string | Path<string>;
}

export type BorderStyle =
  | "none"
  | "hidden"
  | "dotted"
  | "dashed"
  | "solid"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";
