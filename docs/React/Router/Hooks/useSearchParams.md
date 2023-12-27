---
sidebar_position: 1
---

# useSearchParams

路由 V6 新增，使用这个钩子用来获取/设置 params 中的参数，并且更新 state。

params 一般也是`键值对`，比如 discount=true，category=shirt。

获取/设置的使用也需要传入对应的 `key`

## 获取参数

获取参数时，调用 `searchParams` 中的方法`get()`，获取对应的 key 段数据。

```js
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams] = useSearchParams();
  // correct next line
  const result = searchParams.get("category");

  return <></>;
}

// link: https://.../catalog?category=shirt
// result: "shirt"
```

## 设置参数

传入两个参数，是获取参数，与设置参数。初始化方式与 setState 有点相似。

:::note 通过两步设置

**1 - 设置参数数据**

searchParams.set("key", value);

即将 params 设为： ?key=value

**2 - 调用 setSearchParams 方法 将 url 地址改变**

setSearchParams(searchParams);

如果此时点击 button，就会看到浏览器的 params 根据按钮不同而改变了

```js
// result: https://.../catalog?key=value
```

:::

```js
import { useSearchParams } from "react-router-dom";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    // correct-start
    searchParams.set("category", "shirt");
    setSearchParams(searchParams);
    // correct-end
  }

  return (
    <div>
      <button onClick={handleClick}>set to shirt</button>
    </div>
  );
}
```
