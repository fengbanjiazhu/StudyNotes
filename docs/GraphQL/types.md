---
sidebar_position: 3
---

# 类型

graphQL 是根据类型来书写的语法，类似 JAVA。

强制了每个数据的类型

:::note Type

- Int : 32-bit 的整数 type
- Float : 符号双精度的小数点形态。
- String : UTF-8 字符串 type
- Boolean : 布尔值(true or false)
- ID : 唯一编号

:::

:::note Null

！ -> 参数不可以为空。

:::

## 传入类型

当我们书写一个 type 的时候，我们传入以下的数据来说明数据的类型

```JS

const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type Booking {
  _id: ID!
  event: Event!
  user: User!
  createdAt: String!
  updatedAt: String!
}

type Event {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User
}

type User {
  _id: ID!
  email: String!
  password: String
  createEvents:[Event!]
}

type AuthData {
  token: String!
  tokenExpiration: Int!
}

type Response {
  message: String!
}

input EventInput {
  title: String!
  description: String!
  price: Float!
  date: String!
}

input UserInput {
  email: String!
  password: String!
}

type RootQuery {
  events: [Event!]!
  singleEvent(eventID: ID!): Event!
  user(userID: ID!): User
  bookings: [Booking!]!
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createEvent(eventInput: EventInput): Event
  createUser(userInput: UserInput): User
  bookEvent(eventID: ID!): Booking!
  cancelBooking(bookingID: ID!): Response!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);

```

:::note input

Input： 输入选项，即参数类型

:::

例子中，除了 schema， 都是在规定类型。(有点像 TS)。RootQuery 与 RootMutation 也规定了需要传入的参数类型。
