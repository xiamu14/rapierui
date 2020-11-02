export default function bg(props) {
    if (Object.values(props).filter((v) => !!v).length === 0) {
        throw TypeError("props valid.");
    }
    let res = {
        backgroundColor: props.color,
    };
    if (props.img) {
        res.backgroundImage = `url(${props.img})`;
    }
    if (props.repeat) {
        res.backgroundRepeat = props.repeat;
    }
    if (props.size) {
        res.backgroundSize = props.size;
    }
    return res;
}
