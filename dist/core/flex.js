const Direction = {
    row: "row",
    column: "column",
};
export function flexSpaceBetween(direction) {
    return {
        display: "flex",
        flexDirection: direction !== null && direction !== void 0 ? direction : "row",
        justifyContent: "space-between",
        alignItems: "center",
    };
}
export function flexCenter() {
    return {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
}
export function flexColumnCenter() {
    return {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    };
}
export function HStack() {
    return {
        display: "flex",
    };
}
export function VStack() {
    return {
        display: "flex",
        flexDirection: "column",
    };
}
