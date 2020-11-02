import { CSSProperties } from "react";
import { FontWeight } from "../types/font";
interface Props {
    family?: string;
    size?: string;
    lineHeight?: string;
    weight?: FontWeight;
    color?: string;
}
export default function font(props: Props): CSSProperties;
export {};
