import { CSSProperties } from "react";
import position from "./position";

const Direction = {
  row: "row",
  column: "column",
};

type Direction = keyof typeof Direction;

export function flexSpaceBetween(direction?: Direction): CSSProperties {
  return {
    display: "flex",
    flexDirection: direction ?? "row",
    justifyContent: "space-between",
    alignItems: "center",
  };
}

export function flexCenter(): CSSProperties {
  return {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
}

export function flexColumnCenter(): CSSProperties {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
}

export function hStack(): CSSProperties {
  return {
    display: "flex",
  };
}

export function vStack(): CSSProperties {
  return {
    display: "flex",
    flexDirection: "column",
  };
}

export function zStack() {
  return {
    display: "block",
    position: "relative",
    children: {
      position: "absolute",
    },
  };
}
