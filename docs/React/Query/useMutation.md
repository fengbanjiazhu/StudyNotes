---
sidebar_position: 4
---

# useMutation 修改数据

React Query 使用 useMutation 钩子来操作增删改查。

与 useQuery 一样，有着不同的状态，和结果。

:::info 状态
result 对象包含一些非常重要的**状态**，你需要注意这些状态才能提高工作效率。 查询只能处于以下状态之一：

- isIdle 或 status === 'idle' - 修改目前处于闲置状态或处于全新/重置状态
- isLoading 或 status === 'loading' - 修改目前正在进行操作
- isError 或 status === 'error' - 修改遇到了错误
- isSuccess 或 status === 'success' - 修改是成功的，且数据可用

:::

:::info 结果

- error - 如果查询处于 isError 状态，则可以通过 `error` 属性获取该错误
- data - 如果查询处于 isSuccess 状态，则可以通过 `data` 属性获得数据
  :::

## 使用方法

使用方法也很简单，调用 useMutation 钩子，并且传入 mutationFn 配置即可。

:::note Syntax

```jsx title="调用钩子"
const { data, error, isLoading, mutate, reset } = useMutation({
  mutationFn,
  onError,
  onSuccess,
});

// 调用函数时，直接调用mutate，
// mutate也可以重命名为其他函数名称。
mutate(variables);
```

其中解构出的变量：

- mutate 为我们传入的函数。
- reset 是一个内置函数，可以重置
- data, error, isLoading 不需要多说了。

传入的配置为：

- mutationFn：必须，基于 Promise/异步的方法，用来修改数据
- onError，onSuccess 可选，成功/失败时的回调函数

:::

### 使用案例

在自己的使用中，又包装成了一个自定义钩子。传入了 createCabin 方法。

```jsx title="useCreateCabin.js"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEditCabin } from "../../services/apiCabins";
import { toast } from "react-hot-toast";

export function useCreateCabin() {
  const queryClient = useQueryClient();

  // highlight-start
  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabin"] });
    },
    onError: (err) => toast.error(err.message),
  });
  // highlight-end

  return { isCreating, createCabin };
}
```

当成功时，我们会调用 toast.success (一个 React 第三方提醒包)。

失败时，我们会调用 toast.error 来提醒用户出错。

### 修改之后

useMutation 修改之后，我们的需要手动来立马更新状态/将数据立刻刷新，所以我们需要**使用 queryClient 来更新当前的页面状态**

这就是下一篇笔记的内容了。
