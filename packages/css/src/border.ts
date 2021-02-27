import { BorderAttributes, Corner, Path } from "./types/box";
import {
  checkBorderStyle,
  checkColor,
  checkShorthand,
  checkUnit,
} from "./util/check";
import { toCssName } from "./util/transform";

export default function border(
  attributes: string | Path<string> | BorderAttributes
) {
  if (typeof attributes === "string") {
    return `border: ${attributes};`;
  } else {
    const keys = Object.keys(attributes);
    let res = "";
    if (keys.length === 0) {
      console.error(`${attributes} is invalid.`);
    }
    keys.forEach((key) => {
      const value = attributes[key];

      // NOTE: 处理 BorderAttributes
      switch (key) {
        case "width":
          if (typeof value === "string" && checkShorthand(value)) {
            res += `border-width:${value};`;
          } else {
            const tmp = value as Path<string>;
            Object.keys(tmp).forEach((pathKey) => {
              if (checkUnit(tmp[pathKey])) {
                res += `border-${pathKey}-width:${tmp[pathKey]};`;
              }
            });
          }
          break;
        case "style":
          // TODO: 这里需要一个校验函数，校验 value 取值无误
          if (
            typeof value === "string" &&
            checkShorthand(value, "borderStyle")
          ) {
            res += `border-style:${value};`;
          } else {
            const tmp = value as Path<string>;
            Object.keys(tmp).forEach((pathKey) => {
              if (checkBorderStyle(tmp[pathKey])) {
                res += `border-${pathKey}-style:${tmp[pathKey]};`;
              }
            });
          }
          break;
        case "color":
          if (typeof value === "string" && checkShorthand(value, "color")) {
            res += `border-color:${value};`;
          } else {
            const tmp = value as Path<string>;
            Object.keys(tmp).forEach((pathKey) => {
              if (checkColor(tmp[pathKey])) {
                res += `border-${pathKey}-color:${tmp[pathKey]};`;
              }
            });
          }
          break;
        default:
          res += `border-${key}:${value};`;
          break;
      }
    });
    return res;
  }
}

export function radius(values: string | Corner) {
  if (typeof values === "string") {
    return `border-radius: ${values};`;
  } else {
    const keys = Object.keys(values);
    let res = ``;
    if (keys.length > 0) {
      keys.forEach((key) => {
        const value = values[key];
        // NOTE: 将单驼峰的属性名转为连字符
        res += `${toCssName(key)}:${value};`;
      });
    }
    return res;
  }
}
