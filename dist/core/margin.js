/**
 *
 * @param margin '12px' '12px,12px', '12px,12px,12px,12px'
 */
export default function margin(margin) {
    // TODO: 去掉空白字符
    const marginProps = margin.replace(" ", "");
    const marginArr = marginProps.split(",");
    let left = "", right = "", top = "", bottom = "";
    let marginStr = "";
    const res = {};
    const len = marginArr.length;
    switch (len) {
        case 1:
            if (marginArr[0] === "") {
                throw new TypeError(`${margin} valid.`);
            }
            marginStr = margin;
            break;
        case 2:
            if (marginArr[0] === "" || marginArr[1] === "") {
                throw new TypeError(`${margin} valid.`);
            }
            else {
                marginStr = `${marginArr[0]} ${marginArr[1]}`;
            }
            break;
        case 3:
            if (marginArr[0] === "" ||
                marginArr[1] === "" ||
                marginArr[2] === "" ||
                marginArr[3] === "") {
                throw new TypeError(`${margin} valid.`);
            }
            else {
                marginStr = `${marginArr[0]} ${marginArr[1]} ${marginArr[2]}`;
            }
            break;
        case 4:
            if (marginArr[0] === "" &&
                marginArr[1] === "" &&
                marginArr[2] === "" &&
                marginArr[2] === "") {
                throw new TypeError(`${margin} valid.`);
            }
            top = marginArr[0] ? `margin-top: ${marginArr[0]}` : "";
            if (marginArr[0]) {
                res.marginTop = marginArr[0];
            }
            if (marginArr[1]) {
                res.marginRight = marginArr[1];
            }
            if (marginArr[2]) {
                res.marginBottom = marginArr[2];
            }
            if (marginArr[3]) {
                res.marginLeft = marginArr[3];
            }
            break;
        default:
            throw new TypeError(`${margin} valid.`);
    }
    if (marginStr !== "") {
        res.margin = marginStr;
    }
    return res;
}
