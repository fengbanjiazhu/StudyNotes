---
sidebar_position: 2
---

# 初始化

我使用 Node.js 与 Express 建立了简单的 GraphQL 服务器。

[官网教程一览](https://graphql.org/graphql-js/running-an-express-graphql-server/)

## 安装

```bash title="install"
npm install express express-graphql graphql --save
```

## 创建服务器

整体类似于一个路由，当某个存在于 Schema 中的请求，通过 `/graphql` 的时候，会寻找对应 root 的 Function，并进行相关操作。

### 引入 buildSchema 模块，创建 schema。

Schema 中，需要使用 buildSchema 语句创建一个 schema，来指明所有的 routes，将所有的 route 放入 schema 中。

:::note
其中要包括类型，且 key 值必须是唯一的。因为 route 都是独一无二的。
:::

### 创建 root(controller)。

创建业务操作逻辑，**函数名称与路径名称必须一一对应**。

:::note
其实就是当触发对应的 routes 时，要调用对应的 controller
:::

### 引入 graphqlHTTP 模块。

使用 schema 与 root 创建服务。

:::note
开启测试路由 graphiql: true。之后可以在 `localhost:端口/graphql` 查看调试页面。
:::

```js title="App.js"
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();
...

// 创建Query与Mutation的路径
const schema = buildSchema(`
  type RootQuery {
    events: [String!]
  }
  type RootMutation {
    createEvent(name: String): String
  }
`);

// 创建函数处理路径请求，函数名称与路径名称必须一一对应
const root = {
  events: () => {
    return ["Working", "Learning", "Relaxing"];
  },
  createEvent: (args) => {
    const { name } = args;
    return name;
  }
};


app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)

...

app.listen(3000);

```

## 图片笔记一览

![Note](./images/graphql-note.jpg)
