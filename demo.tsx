function Frame() {}
function HStack() {}
function VStack() {}
function Text() {}
function Image() {}
function From() {}
function Input() {}
function TextArea() {}
function Video() {}

function Demo() {
  const state = useState();
  const ref = useRef();

  return Frame(
    Frame("ceshi"),
    VStack().onClick().visible().opactity(); // 强隐藏，不渲染
  )
    .ref()
    .onClick("")
    .animation();
}
