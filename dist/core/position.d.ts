import { CSSProperties } from "react";
interface Props {
    type: "relative" | "absolute" | "fixed";
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
}
export default function position(props: Props): CSSProperties;
export {};
