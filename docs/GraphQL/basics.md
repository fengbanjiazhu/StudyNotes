---
sidebar_position: 1
---

# 基础

一个代替 REST 的 API 端口，来获取数据。他的优点是可以获取`部分数据`。
例如我们可以单独获取 user 的 name 和 id，而不获取其他的数据。

GraphQL 只有一个 endpoint 端口，而且接受的都是 post 请求。
因为我们需要将需要查询的目标放在 `post body` 中，而 get 请求没有 post body。

**等于把查询方法暴露给前端，让前端来使用 query language。**
:::note
GraphQL 是一个**强类型**的操作方式，类似于 TS，必须写明类型。
:::

## 请求本体

例子：

```js title="GraphQL example"
{
  `
  mutation {
    createUser(userInput: {email: "${email}", password: "${password}"}){
      _id
      email
    }
  }
`;
}
```

这个 query 语句中，是一个 mutation 请求。请求接口为 createUser。传入数据为 email 与 password，返回数据为 id 与 email。

## 请求类型

:::note
Query -> 获取数据，等同 GET

Mutation -> 更改数据，等同于 POST，PATCH，PUT，DELETE

Subscription -> 建立实时通信（WebSockets）
