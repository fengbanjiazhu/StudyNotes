---
sidebar_position: 3
---

# Hooks + TS

React 中，有些 Hooks 也需要传入类型。

## useEffect

useEffect 本身不需要传入 type，但是 fetch 的时候可能会需要，参考 unknown 类型的

## useState

在 hooks 中，TS 会有简单的类型推断，所以有时候我们不写明类型也不会报错。

我们也可以使用 hover 大法，来看看他的类型：

```js title='useState'
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  // highlight-next-line
  // const setCount: React.Dispatch<React.SetStateAction<number>>

  return <div>{count}</div>;
}
```

他根据我们传入的初始化 number，自动推断出这里的类型为 number。

如果需要我们手动写明类型的情况，就复制这个类型即可。

```TS
React.Dispatch<React.SetStateAction<number>>,
```

声明主要是使用 Obj 的时候，或者初始为 null 的时候使用：

```TS title="useState"
import { useState } from "react";

type User = {
  name: string;
  age: number;
};

export default function App() {
  // highlight-next-line
  const [count, setCount] = useState<User | null>(null);

  return <div>{count?.name}</div>;
}
```

## useRef

需要声明绑定的元素类型，**不能**只写 HTMLElement。
这里不需要写｜ null

```TS title="useRef"
import { useRef } from "react";

export default function ButtonTest({}) {
  // error next line
  const ref = useRef<HTMLElement>(null);
  const ref2 = useRef<HTMLButtonElement>(null);

  return (
    <>
      // error next line
      <button ref={ref}>Click</button> //没写为HTMLButtonElement所以报错
      <button ref={ref2}>Click</button>
    </>
  );
}
```

## useContext

还没写。。。
