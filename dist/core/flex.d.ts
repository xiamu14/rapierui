import { CSSProperties } from "react";
declare const Direction: {
    row: string;
    column: string;
};
declare type Direction = keyof typeof Direction;
export declare function flexSpaceBetween(direction?: Direction): CSSProperties;
export declare function flexCenter(): CSSProperties;
export declare function flexColumnCenter(): CSSProperties;
export declare function HStack(): CSSProperties;
export declare function VStack(): CSSProperties;
export {};
