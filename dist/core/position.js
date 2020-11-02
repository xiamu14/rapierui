export default function position(props) {
    if (Object.values(props).filter((v) => !!v).length === 0) {
        throw TypeError("props valid.");
    }
    let res = {};
    if (props.type) {
        res.position = props.type;
    }
    if (props.top) {
        res.top = props.top;
    }
    if (props.right) {
        res.right = props.right;
    }
    if (props.bottom) {
        res.bottom = props.bottom;
    }
    if (props.left) {
        res.left = props.left;
    }
    return res;
}
