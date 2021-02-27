import { fontSizeEnum } from "./values";

/**
 * @description 检查数值的单位是否合法
 * @param value 数值
 */
export function checkUnit(value: string): boolean {
  const unitReg = new RegExp(
    /^\-{0,1}([1-9]\d*\.{0,1}[\d]*|0.\d+)(cm|mm|Q|in|pc|px|pt|em|ex|ch|lh|rem|%|vw|vh|vmin|vmax|deg)$/g
  );
  return unitReg.test(value);
}

export function checkColor(value: string): boolean {
  let type = "";
  if (/^rgb\(/.test(value)) {
    //如果是rgb开头，200-249，250-255，0-199
    type =
      "^[rR][gG][Bb][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){2}[\\s]*(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\\s]*[)]{1}$";
  } else if (/^rgba\(/.test(value)) {
    //如果是rgba开头，判断0-255:200-249，250-255，0-199 判断0-1：0 1 1.0 0.0-0.9
    type =
      "^[rR][gG][Bb][Aa][(]([\\s]*(2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?)[\\s]*,){3}[\\s]*(1|1.0|0|0.[0-9])[\\s]*[)]{1}$";
  } else if (/^#/.test(value)) {
    //六位或者三位
    type = "^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$";
  } else if (/^hsl\(/.test(value)) {
    //判断0-360 判断0-100%(0可以没有百分号)
    type =
      "^[hH][Ss][Ll][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*)[)]$";
  } else if (/^hsla\(/.test(value)) {
    type =
      "^[hH][Ss][Ll][Aa][(]([\\s]*(2[0-9][0-9]|360｜3[0-5][0-9]|[01]?[0-9][0-9]?)[\\s]*,)([\\s]*((100|[0-9][0-9]?)%|0)[\\s]*,){2}([\\s]*(1|1.0|0|0.[0-9])[\\s]*)[)]$";
  } else {
    return false; // Named color 值太多了，而且也不常用，所以还是不枚举，直接返回 true
  }
  const colorReg = new RegExp(type);
  return colorReg.test(value);
}

export function checkBorderStyle(value: string): boolean {
  return [
    "none",
    "hidden",
    "dotted",
    "dashed",
    "solid",
    "double",
    "groove",
    "ridge",
    "inset",
    "outset",
  ].includes(value);
}

/**
 * @description 判断 css 里的连写值是否合法
 * @param {string} short - css 里常用的连写值，比如 margin: 10px 10px; ...
 * @param {enum} type - unit： 检查单位； color: 检查颜色； borderStyle: 边的样式值
 */
export function checkShorthand(
  short: string,
  type?: "unit" | "color" | "borderStyle"
) {
  const valArray = short.trim().split(/\s+/);
  if (valArray.length === 0) return false;
  return valArray.every((val) => {
    switch (type) {
      case "color":
        return checkColor(val);
      case "borderStyle":
        return checkBorderStyle(val);
      default:
        return checkUnit(val);
    }
  });
}

export function checkFontSize(value: string) {
  return fontSizeEnum.includes(value) || checkUnit(value);
}
