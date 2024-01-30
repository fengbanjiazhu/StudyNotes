---
sidebar_position: 5
---

# useQueryClient 钩子

当我们使用 useMutation，或者在任何业务场景，我们需要使用代码介入 QueryClient 的时候，就需要使用 useQueryClient 钩子了。

useQueryClient 钩子有很多功能，通过操作 QueryClient，我们可以实现很多业务。

## 立刻刷新数据

当我们想要立刻刷新数据怎么办？
在 QueryClient  调用  `invalidateQueries()`  方法，可以智能地将查询标记为过时的，让他立马重新获取数据

```jsx
import { useQueryClient } from "@tanstack/react-query";

const queryClient = useQueryClient();

queryClient.invalidateQueries({ queryKey: ["key"] });

// 也可以通过这种方法，来快速将active字段更改为true
queryClient.invalidateQueries({ active: true });
```

## 预加载 pre-fetching

:::info

```jsx title="Syntax"
await queryClient.prefetchQuery({ queryKey, queryFn });

// 传入 queryKey 与 queryFn 调用。(与使用普通的 useQuery 一样)
```

通过使用异步方法，来达到预加载的效果，并将数据保存在 cache 中。
:::

```jsx title="useBookings.js"
const queryClient = useQueryClient();

if (page < pageCount)
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, page + 1],
    queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
  });

if (page > 1)
  queryClient.prefetchQuery({
    queryKey: ["bookings", filter, sortBy, page - 1],
    queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
  });
```

这个案例中，我们检测当前的页码，当我们加载当前页面 page 数据的时候，page+1 页面的数据也会被预加载，用户体验会很好，在使用的时候不必等待。
