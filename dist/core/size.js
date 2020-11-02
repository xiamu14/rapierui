export default function size(size) {
    // TODO: 去掉空白字符
    const sizeProps = size.replace(" ", "");
    const sizeArr = sizeProps.split(",");
    let width = null, height = null;
    if (sizeArr.length === 1) {
        width = height = sizeArr[0];
    }
    else if (sizeArr.length === 2) {
        width = sizeArr[0];
        height = sizeArr[1];
    }
    let res = {};
    if (width) {
        res.width = width;
    }
    if (height) {
        res.height = height;
    }
    return res;
}
