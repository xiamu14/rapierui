/**
 * @description 绘制圆形
 * @param diameter 圆形直角
 */
export function circle(diameter:string) {
    return `
        width: ${diameter};
        height: ${diameter};
        border-radius: 50%;
    `
}

export function RoundedRectangle(w:string, h:string, radius: string) {
    return `
    width: ${w};
    height: ${h};
    border-radius: ${radius};
    `
}