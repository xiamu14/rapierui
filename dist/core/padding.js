/**
 *
 * @param padding '12px' '12px,12px', '12px,12px,12px,12px'
 */
export default function padding(padding) {
    // TODO: 去掉空白字符
    const paddingProps = padding.replace(" ", "");
    const paddingArr = paddingProps.split(",");
    let left = "", right = "", top = "", bottom = "";
    let paddingStr = "";
    const res = {};
    const len = paddingArr.length;
    switch (len) {
        case 1:
            if (paddingArr[0] === "") {
                throw new TypeError(`${padding} valid.`);
            }
            paddingStr = padding;
            break;
        case 2:
            if (paddingArr[0] === "" || paddingArr[1] === "") {
                throw new TypeError(`${padding} valid.`);
            }
            else {
                paddingStr = `${paddingArr[0]} ${paddingArr[1]}`;
            }
            break;
        case 3:
            if (paddingArr[0] === "" ||
                paddingArr[1] === "" ||
                paddingArr[2] === "" ||
                paddingArr[3] === "") {
                throw new TypeError(`${padding} valid.`);
            }
            else {
                paddingStr = `${paddingArr[0]} ${paddingArr[1]} ${paddingArr[2]}`;
            }
            break;
        case 4:
            if (paddingArr[0] === "" &&
                paddingArr[1] === "" &&
                paddingArr[2] === "" &&
                paddingArr[2] === "") {
                throw new TypeError(`${padding} valid.`);
            }
            if (paddingArr[0]) {
                res.paddingTop = paddingArr[0];
            }
            if (paddingArr[1]) {
                res.paddingRight = paddingArr[1];
            }
            if (paddingArr[2]) {
                res.paddingBottom = paddingArr[2];
            }
            if (paddingArr[3]) {
                res.paddingLeft = paddingArr[3];
            }
            break;
        default:
            throw new TypeError(`${padding} valid.`);
    }
    if (paddingStr !== "") {
        res.padding = paddingStr;
    }
    return res;
}
