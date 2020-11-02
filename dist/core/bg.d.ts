import { CSSProperties } from "react";
declare type RepeatType = "repeat-x" | "no-repeat" | "repeat" | "space" | "round";
declare type SizeType = "contain" | "cover" | string;
interface Props {
    color: string;
    img?: string;
    position?: string;
    repeat?: RepeatType;
    size?: SizeType;
}
export default function bg(props: Props): CSSProperties;
export {};
