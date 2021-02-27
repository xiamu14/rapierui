import { GlobalTypes } from "./global";

export interface Oblique {
  v: number;
  u: "deg";
}

type FontStyle = "normal" | "italic" | "oblique" | Oblique | GlobalTypes;

type FontWeight =
  | "normal"
  | "bold"
  | "lighter"
  | "bolder"
  | GlobalTypes
  | number;

export interface FontAttributes {
  style?: FontStyle;
  variant?: string;
  weight?: FontWeight;
  size?: string;
  lineHeight?: string;
  family?: string;
}

export type NamedColor =
  | "aqua"
  | "black"
  | "blue"
  | "fuchsia"
  | "gray"
  | "green"
  | "lime"
  | "maroon"
  | "navy"
  | "olive"
  | "orange"
  | "purple"
  | "red"
  | "silver"
  | "teal"
  | "white"
  | "yellow"
  | "transparent";

type TextDecorationLine =
  | "underline"
  | "line-through"
  | "none"
  | "overline"
  | "blink"
  | GlobalTypes;

type TextDecorationStyle =
  | "solid"
  | "double"
  | "dotted"
  | "dashed"
  | "wavy"
  | GlobalTypes;

export interface TextDecoration {
  line?: TextDecorationLine | TextDecorationLine[];
  color?: string;
  style?: TextDecorationStyle;
}

type TextWordOrWhiteSpacing =
  | "normal"
  | "nowrap"
  | "pre"
  | "pre-wrap"
  | "pre-line"
  | "break-spaces"
  | GlobalTypes;

export interface Text {
  decoration?: TextDecoration;
  lineHeight?: string;
  letterSpacing?: string;
  wordSpacing?: TextWordOrWhiteSpacing;
  whiteSpacing?: TextWordOrWhiteSpacing;
}
