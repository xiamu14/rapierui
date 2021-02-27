import { withUnit } from '../../dist/types/util/values';
import { GlobalTypes } from "./global";

export type Direction = "row" | "row-reverse" | "column" | "column-reverse";

type Wrap = "wrap" | "nowrap" | "wrap-reverse"; // 默认值是 “”

type Basis =
  | "auto"
  | "content"
  | "fill"
  | "max-content"
  | "min-content"
  | "fit-content"
  | GlobalTypes; // 默认值是 "auto"

export interface FlexAttributes {
  direction?: Direction | GlobalTypes;
  wrap?: Wrap | GlobalTypes;
  grow?: number;
  shrink?: number;
  basis?: Basis | withUnit;
}


/**
 * @description Positional Alignment
 */
type Positional =
  | "center"
  | "start"
  | "end"
  | "flex-start"
  | "flex-end"
  | "left"
  | "right";

/**
 * @description Baseline alignment
 */
type Baseline = "baseline" | "first baseline" | "last baseline";

/**
 * @description Distributed alignment
 */
export type Distributed =
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch";

/**
 * @description Overflow alignment
 */
type Overflow = "safe center" | "unsafe center";

export type ContentAlignments =
  | Positional
  | Baseline
  | Distributed
  | Overflow
  | GlobalTypes;

  type Basic = "normal" | "stretch";

export type ItemsAlignments = Exclude<
  Basic | Positional | Baseline | Overflow | GlobalTypes | 'self-start' | 'self-end',
  "left" | "right"
>;