---
sidebar_position: 3
---

# useCallback

将一个函数缓存起来，如果**依赖项无变动**，那就不重新渲染该函数，而是直接从缓存读取。

## 使用方法

与之前类似。

:::note 语法

```js
const cachedFn = useCallback(fn, dependencies);
```

需要接受一个 Fn 函数，与一个依赖项 Dependency Array。

如果依赖项为空，说明只需要初始化的时候执行一次。使用与 useEffect 相同
:::

```js title="App.js"
import { memo, useCallback, useMemo } from "react";

// correct-start
const handleAddPost = useCallback(function handleAddPost(post) {
  setPosts((posts) => [post, ...posts]);
}, []);
// correct-end

const archiveOptions = useMemo(() => {
  return {
    show: false,
    title: `Post archive in addition to ${posts.length} main posts`,
  };
}, [posts.length]);

<Archive
  archiveOptions={archiveOptions}
  //correct next line
  onAddPost={handleAddPost}
  setIsFakeDark={setIsFakeDark}
/>;
```

至此位置，该高消耗组件的缓存就彻底完成了，无论我们如何更改父组件，他都不会受到`Obj参数`，`函数参数`等负面影响，也不会因为其余组件状态改变而重新渲染了。大大提高了性能。

:::note 总结
跟`大消耗组件`相关的 `prop`，`组件本身`，`数据`，最好都使用`缓存`来防止其重新生成。

这样当**其他部分变动的时候，该组件不变动，可以避免 re-render 直接使用**
:::
