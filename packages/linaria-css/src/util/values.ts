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
 *
 * @param obj
 * @param config 配置取值范围，类型，但是只警告，不报错，因为 css 只会无效，不会报错
 */
export function getValueWithUnit(
  obj: withUnit,
  config?: { key: string; positive?: boolean }
) {
  if (config) {
    const { positive, key } = config;
    if (positive) {
      warnNegative(key, obj.v);
    }
  }
  return `${obj.v}${obj.u}`;
}
