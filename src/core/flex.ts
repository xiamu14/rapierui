import { CSSProperties } from "react";

const Direction = {
  row: "row",
  column: "column",
};

type Direction = keyof typeof Direction;

export function flexSpaceBetween(direction?: Direction): CSSProperties {
  return {
    display: "flex",
    flexDirection: direction ?? "column",
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
