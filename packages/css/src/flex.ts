import { ContentAlignments, FlexAttributes, ItemsAlignments } from './types/flex';
import { getValueWithUnit } from "./util/values";
import { warnNegative } from "./util/warn";


/**
 * @description flex 布局
 * @param direction flex 布局的方向
 */
export default function flex(attributes?: FlexAttributes) {
  let res = "display: flex;";
  if (!attributes) {
    return res;
  }
  const { direction, basis, grow, shrink } = attributes;
  if (direction) {
    res += `flex-direction: ${direction};`;
  }
  if (basis) {
    res =
      typeof basis === "string"
        ? `${res}flex-basis: ${basis};`
        : `${res}flex-basis: ${getValueWithUnit(basis, {
            key: "flex-basis",
            onlyPositive: true,
          })};`;
  }
  if (grow) {
    warnNegative("flex-grow", grow);
    res += `flex-grow: ${grow};`;
  }
  if (shrink) {
    warnNegative("flex-grow", shrink);
    res += `flex-shrink: ${shrink};`;
  }
  return res;
}



/**
 * @description justify-content: flex 的子内容在主轴的分布方式
 * @param align 分布方式
 */
export function justifyContent(align: ContentAlignments) {
  return `justify-content: ${align};`;
}



export function alignItems(align: ItemsAlignments) {
  return `align-items: ${align};`;
}
