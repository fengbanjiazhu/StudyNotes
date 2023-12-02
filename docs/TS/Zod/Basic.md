---
sidebar_position: 1
---

# 基础

[ZOD](https://zod.dev/)是一个 TS 验证第三方库，方便实用。通过创建 Schema，来验证数据，帮助开发者。

## 安装

```bash
npm i zod
```

## 用法例子

创建一个简单的字符串 Schema

```js title='zod'
import { z } from "zod";

const mySchema = z.string();

mySchema.parse("tuna"); // => "tuna"
// error next line
mySchema.parse(12); // => throws ZodError

// Safe Parse (如果验证失败不抛出错误)
// correct-start
const result = mySchema.safeParse("tuna"); // => { success: true; data: "tuna" }
if (result.success) return result.data;
// correct-end

// error next line
mySchema.safeParse(12); // => { success: false; error: ZodError }
```

## 基本方法

```js title='zod'
import { z } from "zod";

// 原始值
z.string();
z.number();
z.bigint();
z.boolean();
z.date();

// 空类型
z.undefined();
z.null();
z.void(); // 接受null或undefined

// 全能类型
// 允许 any value
z.any();
z.unknown();

// never 类型
// 允许没有 values
z.never();
```
