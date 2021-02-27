```typescript
import App from "./App";

ReactDom.reader(App, document.querySelector("#root"));
```

```typescript
import Retouch from "retouch";
import { Div } from "retouch/html";

export default function App() {
  return Div("hello world").onClick(() => {
    console.log("hello world");
  }).css(`
            font-size: 14px;
            color: red
        `);
}
```

```typescript
import Retouch from "retouch";
import { Div, P, HStack } from "retouch/html";
import { size, align, font } from "retouch/css";

export default function ToDoItem() {
  const [state, setState] = useState("hello world");

  return HStack(P(state).css(font({ size: "12px", weight: "1" }))).css(
    size("12px", "12px"),
    align("center")
  );
}
```

```typescript
import RetouchUI from "retouch/ui";
import { List, P, HStack } from "retouch/html"; // RetouchElement[]
import { size, align, font } from "retouch/css";

export default function ToDo() {
  const [state, setState] = useState(["wake up", "drink milk"]);

  return HStack(
    state.map((value, index) => {
      return ToDoItem(state)
        .key(index.toString());
        .onHover()
        .onMouseEnter()
        .onClick()
        .css(font({ size: "12px", weight: "1" }), hover())
    })
  ).css(size("12px", "12px"), align("center"));
}
```

```typescript
import RetouchUI from "retouch/ui";
import { List, P, HStack } from "retouch/html"; // RetouchElement[]
import { size, align, font } from "retouch/css";

export default function ToDo() {
  const [state, setState] = useState(["wake up", "drink milk"]);

  return HStack(
    state.map((value, index) => {
      return ToDoItem(state)
        .key(index.toString());
        .onHover()
        .onMouseEnter()
        .onClick()
        .css(font({ size: "12px", weight: "1" }))
        .visible(index > 0)
    })
  ).css(size("12px", "12px"), align("center"));
}
```

```typescript
import RetouchUI from "retouch/ui";
import { P, HStack } from "retouch/html"; // RetouchElement[]
import { size, align, font, name, compose } from "retouch/css";

const ToDoCss = (props) => compose(name(props.name),font({ size: "12px", weight: "1" });

export default function ToDo() {
  const [state, setState] = useState(["wake up", "drink milk"]);

  return HStack(
    state.map((value, index) => {
      return ToDoItem(state)
        .key(index.toString());
        .props({onComplete: () => {console.log("complete")}})
        .onHover()
        .onMouseEnter()
        .onClick()
        .css(ToDoCss), hover())
    })
  ).css(size("12px", "12px"), align("center"));
}

```

## @retouch/css

```tsx
import {
  css,
  size,
  align,
  font,
  name,
  _hover,
  _nthTypeOf,
  _mediaQuery,
} from "@retouch/css";

export default function TODO() {
  return <div></div>;
}
```

## css 的属性分为修饰、布局、工具、动画、其他五类

1. 修饰包含下面几个方面的内容：

- 文本
  - color
  - line-height
  - text-style
  - word-spacing
  - letter-spacing
  - vertical-align
  - text-indent
  - white-space
  - text-decoration
  - text-transform
  - text-shadow
  - direction
  - font
    - font-family
    - font-size
    - font-weight
    - font-style
    - font-variant
- 背景
  - background-image
  - background-size
  - background-position
  - background-repeat
- 边沿（margin）
- 填充（padding）
- 边框
  - border-radius
  - border-style
  - border-weight
  - border-color
- 尺寸
  - width
  - height
  - object-fit、object-position
- 阴影
- 滤镜

2. 布局包含下面三个方面的内容：

- 位置
  - position
  - translate
- Flex
- Grid

3. 工具包含下面方面的内容：

- media query
- 大部分的伪类

4. 动画包含的内容

5. 其他

- box-sizing

## 常用的样式片段

- ellipsis: 文本省略号
- shape: 各种形状的盒子（比如圆形、圆角矩形，三角形...）
- backgroundImage: 背景图片
- layout: 常用布局方案（常用对齐和空隙的设置）
- theme: 主题相关
  - 固定的分栏布局
  - 固定的空白间隙
  - 固定的字体，文本

## 样式设置思维

先布局再内容最后写动画

# 开发规划

- @rapierui/css
  - vitejs-plugin: 支持 react/remax(小程序)

UI 库
- @rapierui/html： UI 渲染
- @rapierui/event: 高级封装事件处理（比如手势，拖拽，键盘等）
- @rapierui/reactive: 异步事件流处理（对应 rxjs）
- @rapierui/anime: 动画逻辑
- @rapierui/hook： 逻辑复用
- 


