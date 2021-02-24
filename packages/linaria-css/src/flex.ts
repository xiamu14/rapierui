import { getValueWithUnit, withUnit } from "./util/values";
import { GlobalTypes } from "./types/global";
import { warnNegative } from "./util/warn";
type Direction = "row" | "row-reverse" | "column" | "column-reverse";

type Wrap = "wrap" | "nowrap" | "wrap-reverse"; // 默认值是 “”

type Basis =
  | "auto"
  | "content"
  | "fill"
  | "max-content"
  | "min-content"
  | "fit-content"
  | GlobalTypes; // 默认值是 "auto"

interface FlexAttributes {
  direction?: Direction | GlobalTypes;
  wrap?: Wrap | GlobalTypes;
  grow?: number;
  shrink?: number;
  basis?: Basis | withUnit;
}

/**
 *
 * @param direction flex 布局的方向
 */
export default function flex(attributes: FlexAttributes) {
  let res = "display: flex;";
  const { direction, basis, grow, shrink } = attributes;
  if (direction) {
    res += `flex-direction: ${direction}`;
  }
  if (basis) {
    res =
      typeof basis === "string"
        ? `${res}flex-basis: ${basis};`
        : `${res}flex-basis: ${getValueWithUnit(basis, {
            key: "flex-basis",
            positive: true,
          })};`;
  }
  if (grow) {
    warnNegative("flex-grow", grow);
    res += `flex-grow: ${grow};`;
  }
  if (shrink) {
    warnNegative("flex-grow", shrink);
    res += `flex-shrink: ${shrink};`;
  }
  return res;
}
