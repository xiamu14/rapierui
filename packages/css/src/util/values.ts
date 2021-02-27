import { Url } from './../types/background';
import { checkUnit } from "./check";
import { warnNegative } from "./warn";

type Unit =
  | "cm"
  | "mm"
  | "Q"
  | "in"
  | "pc"
  | "px"
  | "pt"
  | "em"
  | "ex"
  | "ch"
  | "lh"
  | "rem"
  | "%"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax"
  | "deg";
export interface withUnit {
  /**
   * value: 数值
   */
  v: number;
  /**
   * unit: 单位- css 中支持的所有单位
   */
  u: Unit;
}

/**
 * 返回带单位的值
 * @param v 数值
 * @param u 单位
 */
export function united(v: number, u: Unit): withUnit {
  return {
    v,
    u,
  };
}

/**
 *
 * @param obj
 * @param config 配置取值范围，类型，但是只警告，不报错，因为 css 只会无效，不会报错
 */
export function getValueWithUnit(
  obj: withUnit,
  config?: { key: string; onlyPositive?: boolean }
) {
  if (config) {
    const { onlyPositive, key } = config;
    if (onlyPositive) {
      warnNegative(key, obj.v);
    }
  }
  return `${obj.v}${obj.u}`;
}

/**
 * @description 读取 css 里的连写值
 * @param {string} short - css 里常用的连写值，比如 margin: 10px 10px; ...
 */
export function getShorthand(short: string) {
  const valArray = short.trim().split(" ");
  if (valArray.length === 0 || valArray.length > 4)
    throw new Error(`${short} is invalid value.`);
  const isValid = valArray.every((val) => {
    return checkUnit(val);
  });
  if (isValid) {
    return valArray;
  } else {
    throw new Error(`${short} is valid value.`);
  }
}

export const fontSizeEnum = [
  "xx-small",
  "x-small",
  "small",
  "medium",
  "large",
  "x-large",
  "xx-large",
  "larger",
  "smaller",
  "inherit",
];

export function url(src: string): Url {
  return new Url(src);
}