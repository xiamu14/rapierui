import border, { radius } from "./border";
import { BorderAttributes, BoxSizing, Corner, Path, Size } from "./types/box";
import { checkShorthand, checkUnit } from "./util/check";
import { warnNegative } from "./util/warn";

interface BoxAttributes {
  size?: Size;
  margin?: string | Path<string>;
  padding?: string | Path<string>;
  border?: string | Path<string> | BorderAttributes;
  radius?: string | Corner;
  boxSizing?: BoxSizing;
  shadow?: string;
}

export default function box(attributes: BoxAttributes) {
  let res = "";
  Object.keys(attributes).forEach((key) => {
    const value = attributes[key];
    switch (key) {
      case "size":
        res += `${size(value)}`;
        break;
      case "margin":
        res += `${margin(value)}`;
        break;
      case "padding":
        res += `${padding(value)}`;
        break;
      case "border":
        res += `${border(value)}`;
        break;
      case "radius":
        res += `${radius(value)}`;
        break;
      case "boxSizing":
        res += `box-sizing:${value}-box;`;
        break;
      default:
        res += `box-shadow:${value};`;
        break;
    }
  });
  return res;
}

export function size(values: Size) {
  if (Object.keys(values).length === 1) {
    const tmp = values as { side: string };
    return `width:${tmp.side};height:${tmp.side};`;
  } else {
    const tmp = values as { width: string; height: string };
    return `width:${tmp.width};height:${tmp.height};`;
  }
}

export function margin(values: string | Path<string>) {
  let res = "";
  const tag = "margin";
  if (typeof values === "string") {
    if (checkShorthand(values)) {
      res = `${tag}:${values};`;
    } else {
      console.error(`${values} is invalid.`);
    }
  } else {
    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (checkUnit(value)) {
        res += `${tag}-${key}:${value};`;
      } else {
        warnNegative(key, value);
      }
    });
  }
  return res;
}

export function padding(values: string | Path<string>) {
  let res = "";
  const tag = "padding";
  if (typeof values === "string") {
    if (checkShorthand(values)) {
      res = `${tag}:${values};`;
    } else {
      console.error(`${values} is invalid.`);
    }
  } else {
    Object.keys(values).forEach((key) => {
      const value = values[key];
      if (checkUnit(value)) {
        res += `${tag}-${key}:${value};`;
      } else {
        warnNegative(key, value);
      }
    });
  }
  return res;
}

/**
 * @description 定义当一个元素的内容太大而无法适应 块级格式化上下文 时候该做什么。它是 overflow-x 和overflow-y的 简写属性 。
 */
export function overflow() {}