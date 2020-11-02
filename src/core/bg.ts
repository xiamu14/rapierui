import { CSSProperties } from "react";

type RepeatType = "repeat-x" | "no-repeat" | "repeat" | "space" | "round";

type SizeType = "contain" | "cover" | string;

interface Props {
  color: string;
  img?: string;
  position?: string;
  repeat?: RepeatType;
  size?: SizeType;
}

export default function bg(props: Props) {
  if (Object.values(props).filter((v) => !!v).length === 0) {
    throw TypeError("props valid.");
  }
  let res: CSSProperties = {
    backgroundColor: props.color,
  };
  if (props.img) {
    res.backgroundImage = `url(${props.img})`;
  }
  if (props.repeat) {
    res.backgroundRepeat = props.repeat;
  }
  if (props.size) {
    res.backgroundSize = props.size;
  }
  return res;
}
