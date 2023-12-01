---
sidebar_position: 3
---

# 类型 Types

TS 是基于类型的语言，TS 和 JS 的类型有些许不同，有基本类型，还有复杂类型。

## 基本类型

### String

一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。

```ts title='String'
let name: string = "Jeffrey";
let words: string = `您好，我是 ${name} `;
```

### Number

双精度 64 位 Float。它可以用来表示整数和分数。

```ts title='Number'
let decLiteral: number = 6; // 十进制
```

### Boolean

True 和 False。

```ts title='Boolean'
let flag: boolean = true;
```

### Null

表示对象值缺失。

Null 用的比较少，因为 null 类型只有一个 null，
那为什么还要拥有 null/undefined 这种类型呢？
因为 TS 中还有一个联合类型

### Undefined

用于初始化变量为一个未定义的值。

### Array 数组

用于初始化变量为一个未定义的值。

<!--  -->

## 基础联合类型

他可以是这两个中的一个。

Type here

- lists will help you
- present the key points
- that you want your users to remember
  - and you may nest them
    - multiple times

## Title 4

You can configure the TOC heading levels either per-document or in the theme configuration.

<!-- markdown 使用```包裹 -->

```js title='test.js'
your code;
```
