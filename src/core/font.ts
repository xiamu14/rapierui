import { CSSProperties } from "react";
import { FontWeight } from "../types/font";

interface Props {
  family?: string;
  size?: string;
  lineHeight?: string;
  weight?: FontWeight;
  color?: string;
}

export default function font(props: Props) {
  if (Object.values(props).filter((v) => !!v).length === 0) {
    throw TypeError("font props valid.");
  }
  const res: CSSProperties = {};
  if (props.family) {
    res.fontFamily = props.family;
  }
  if (props.size) {
    res.fontSize = props.size;
  }
  if (props.lineHeight) {
    res.lineHeight = props.lineHeight;
  }
  if (props.weight) {
    res.fontWeight = props.weight;
  }
  if (props.color) {
    res.color = props.color;
  }
  return res;
}
