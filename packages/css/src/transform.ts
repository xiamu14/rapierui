import { TransformFunctionValue } from "./types/transform";

/**
 * @description CSS transform 属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改CSS视觉格式化模型的坐标空间来实现的。只能转换由盒模型定位的元素。
 * @param params
 */
export default function transform(
  attributes: string | TransformFunctionValue | TransformFunctionValue[]
) {
  let value = "";
  if (typeof attributes === "string") {
    value = attributes;
  } else if (Array.isArray(attributes)) {
    value = attributes.reduce((accumulator, attr) => {
      return accumulator + attr.value + " ";
    }, "");
  } else {
    value = attributes.value;
  }

  return `transform:${value};`;
}

export function matrix(
  a: number,
  b: number,
  c: number,
  d: number,
  tx: number,
  ty: number
): TransformFunctionValue {
  return new TransformFunctionValue(
    "matrix",
    `${a},${b},${c},${d},${tx},${ty}`
  );
}

export function translate(x: string, y?: string) {
  let value = x;
  value += y ? `,${y}` : ''; // 默认 0
  return new TransformFunctionValue("translate", value);
}

export function translateAlone(x: string, y?: string, z?: string) {
  let value = x;
  value += y ? " ${y}" : "";
  value += z ? " ${z}" : "";
  return `translate:${value};`;
}
