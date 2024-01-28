---
sidebar_position: 1
---

# 基础

React Query 是一个数据获取(data-fetching)库，它使 React 程序中的**获取，缓存，同步和更新服务器状态**变得轻而易举。

React Query 兼容 React v16.8+，支持 React DOM 和 React Native。

## 安装

```bash
npm i @tanstack/react-query
```

## 核心

React Query 有 3 个核心概念：

- 查询 Queries
- 修改 Mutations
- 主动查询失效 Query Invalidation

```js title="Query Example"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { getTodos, postTodo } from "../my-api";

// 创建一个 client
const queryClient = new QueryClient();

function App() {
  return (
    // 提供 client 至 App
    <QueryClientProvider client={queryClient}>
      <Todos />
    </QueryClientProvider>
  );
}

function Todos() {
  // 访问 client
  const queryClient = useQueryClient();

  // 查询
  const query = useQuery({ queryKey: ["todos"], queryFn: getTodos });

  // 修改
  const mutation = useMutation({
    mutationFn: postTodo,
    onSuccess: () => {
      // 错误处理和刷新
      queryClient.invalidateQueries(["todos"]);
    },
  });

  return (
    <div>
      <ul>
        {query.data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: "Do Laundry",
          });
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

render(<App />, document.getElementById("root"));
```

这是一个整体的例子，后面是当时使用的时候的实际案例。
