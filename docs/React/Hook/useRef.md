---
sidebar_position: 4
---

# useRef 钩子

useRef 笔记，[官网文档](https://react.dev/reference/react/useRef)。useRef 主要有三个功能

## 记忆功能

useRef 使用的时候不会刷新状态。

```js title="timer"
function MyApp() {
  let timer;
  const handleClick = () => {\
    // 每次点击都会清楚之前的计时器，看似没问题
    // 但是一旦组件重新渲染，是不能重置计时器的。因为本次的timer与之前的timer不是一个变量。
    clearInterval(timer);
    timer = setInterval(() => {}, 1000);
  };
}
```

如果单纯的 let timer，当组件的状态刷新重新渲染，timer 被销毁，是无法找到当前计时器的。

导致的结果就是：随着渲染，计时器越来越多，导致程序崩溃

```js title="timer"
import {useRef} from "react"
function MyApp() {
  // correct next line
  let timer = useRef(null);
  const handleClick = () => {\
    clearInterval(timer);
    timer = setInterval(() => {}, 1000);
  };
}
```

而 `let timer = useRef(null)` 可以正确的找到之前的计时器，并销毁他。

## 获取 DOM (最常用功能)

可以**获取绑定的元素**，并且可以操作他。
`ref.current`为当前元素。

如例子中的 focus。

```js title="useRef"
import { useRef } from "react";

export default function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

还有操作属性，文字等。

```js title="useRef"
console.log(xxx.current);
xxx.current.innerHTML = "Jeff Learn";
xxx.current.style.background = skyblue;
```

## 子组件相关

### forwardRef

[forwardRef 官方文档](https://zh-hans.react.dev/reference/react/forwardRef)

我们想要获取**嵌套子组件的元素**，来**操作子组件的一部分属性**时，就需要 forwardRef。

:::note
forwardRef 允许你的组件使用 `ref` 将一个 DOM 节点暴露给父组件。
:::

#### 子组件需要

- 子组件需要包裹在 forwardRef 中导出
- 子组件需要在 props 中包括 ref 属性
  - 子组件的 props 应该收到 `ref` 作为第二个参数。将其传递到要公开的 DOM 节点中：
- 子组件将 ref 绑定某个元素

```js title="Child.jsx"
import { forwardRef } from "react";

// 使用forwardRef包裹子组件，并在props后增加参数2 ref
// correct next line
const MyInput = forwardRef(function MyInput(props, ref) {
  const { label, ...otherProps } = props;
  return (
    <label>
      {label}
      // correct next line
      <input {...otherProps} ref={ref} />
      // 并且ref需要绑定某个元素
    </label>
  );
});
```

#### 父组件需要

- 创建 ref 并传递给子组件。
- 使用 ref 来操作子组件元素。

```js title="Parent.jsx"
import { useRef } from "react";

function Form() {
  // correct next line
  const ref = useRef(null);

  function handleClick() {
    // 此处可以操作子组件的聚焦效果
    ref.current.focus();
  }

  return (
    <form>
      // correct next line
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        编辑
      </button>
    </form>
  );
}
```

### 命令式句柄 useImperativeHandle

`useImperativeHandle` 是 React 中的一个 Hook，它能让你**自定义**由 ref 暴露出来的句柄。

假设你不想子组件暴露出整个 DOM 节点，只想它暴露其中两个方法：focus 和 scrollIntoView。为此，用单独额外的 ref 来指向真实的浏览器 DOM。

:::note 语法

```js
useImperativeHandle(ref, createHandle, dependencies?)
```

- 传入 `forwardRef 中获取的 ref`，
- 传入一个函数，该函数的 Return 中包括**想要暴露的函数，属性等**。

:::

#### 子组件选择暴露范围

要注意这里的代码中，分别有两个 ref。

- 一个是父组件创建传入的，想要操控的。
- 一个是自组件创建的，绑定元素并定制暴露的。

```js title = "Child.jsx"
import { forwardRef, useRef, useImperativeHandle } from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  // correct-start
  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    []
  );
  // correct-end

  return <input {...props} ref={inputRef} />;
});

export default MyInput;
```

#### 父组件使用定制 ref

```js title="Parent.jsx"
import { useRef } from "react";
import MyInput from "./MyInput.js";

export default function Form() {
  const ref = useRef(null);

  function handleClick() {
    // correct next line
    ref.current.focus();

    // 这行代码不起作用，因为 DOM 节点没有被暴露出来：
    // error next line
    ref.current.style.opacity = 0.5;
  }

  return (
    <form>
      //highlight-next-line
      <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
```
