import {
  Direction,
  Distributed,
  FlexAttributes,
  ItemsAlignments,
} from "../types/flex";
import flex, { alignItems, justifyContent } from "../flex";

/**
 * @description 使用 flex 实现的子元素垂直水平居中对齐
 */
export function center() {
  return `${flex()}${justifyContent("center")}${alignItems("center")}`;
}

/**
 * @description flex 常用布局简写
 * @param {Object} config
 * @param {string} config.direction - flex-direction
 * @param {Object} config.attributes - 除 flex-direction 以外的 flex 属性，比如 flex-grow
 * @param {string} config.distributed - justify-content 里 distributed 的取值，其他的不常用，故这里舍去
 * @param {string} config.align - align-items 的取值
 */
export function flexSpace(config?: {
  direction?: Direction;
  distributed?: Distributed;
  align?: ItemsAlignments;
  attributes?: Omit<FlexAttributes, "direction">;
}) {
  if (config) {
    const { attributes, distributed, align, direction } = config;
    return `${flex(
      direction ? Object.assign({ direction }, attributes) : attributes
    )}${justifyContent(distributed ?? "space-between")}${alignItems(
      align ?? "center"
    )}`;
  }
  return `${flex()}${justifyContent("space-between")}${alignItems("center")}`;
}
