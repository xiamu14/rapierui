export default function font(props) {
    if (Object.values(props).filter((v) => !!v).length === 0) {
        throw TypeError("font props valid.");
    }
    const res = {};
    if (props.family) {
        res.fontFamily = props.family;
    }
    if (props.size) {
        res.fontSize = props.size;
    }
    if (props.lineHeight) {
        res.lineHeight = props.lineHeight;
    }
    if (props.weight) {
        res.fontWeight = props.weight;
    }
    if (props.color) {
        res.color = props.color;
    }
    return res;
}
