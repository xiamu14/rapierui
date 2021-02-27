import { FontAttributes, Oblique } from "./types/text";
import { checkFontSize } from "./util/check";

export default function font(attributes: string | FontAttributes) {
  if (typeof attributes === "string") {
    return `font:${attributes};`;
  }
  let res = "";
  Object.keys(attributes).forEach((key) => {
    if (key === "style" && typeof attributes[key] !== "string") {
      const tmp = attributes[key] as Oblique;
      res += `font-style:oblique ${tmp.v}${tmp.u};`;
    }
    const tmp = attributes[key] as string;
    if (key === "size" && !checkFontSize(tmp)) {
      console.warn(`${tmp} is invalid.`);
    } else {
      res += `font-${key}:${attributes[key]};`;
    }
  });
  return res;
}
