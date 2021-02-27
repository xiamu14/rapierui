import { Direction } from "./types/flex";
import { checkUnit } from "./util/check";
import { getShorthand } from "./util/values";
import { warnNegative } from "./util/warn";

type Mode = "absolute" | "relative" | "fixed" | "sticky";

type Offset = string | Direction;

export function position(mode: Mode, offset?: Offset) {
  let res = `position:${mode};`;
  if (offset) {
    if (typeof offset === "string") {
      try {
        const values = getShorthand(offset);
        switch (values.length) {
          case 1:
            res += `top:${values[0]};right:${values[0]};bottom:${values[0]};left:${values[0]};`;
            break;
          case 2:
            res += `top:${values[0]};right:${values[1]};bottom:${values[0]};left:${values[1]};`;
            break;
          case 3:
            res += `top:${values[0]};right:${values[1]};bottom:${values[2]};left:${values[1]};`;
            break;
          default:
            res += `top:${values[0]};right:${values[1]};bottom:${values[2]};left:${values[3]};`;
            break;
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      Object.keys(offset).forEach((key) => {
        const value = offset[key];
        if (checkUnit(value)) {
          res += `${key}:${value};`;
        } else {
          warnNegative(key, value);
        }
      });
    }
    return res;
  }
  return res;
}
