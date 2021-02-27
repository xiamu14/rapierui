import { TextDecoration } from "./types/text";
import { checkColor } from "./util/check";

export default function text() {}

export function color(value: string) {
  if (checkColor(value)) {
    return `color: ${value}`;
  }
}

export function textDecoration(attributes: string | TextDecoration) {}

export function textIndent() {}

export function textAlign() {}

/**
 * @description 指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式。
 */
export function verticalAlign() {}
