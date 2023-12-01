---
sidebar_position: 2
---

# 类型注解与类型断言

TS 通过类型注解，与类型断言

## 类型注解 :Type

通过 :Type 来写明类型。
可以不赋值，预声明。当后期写入其它类型时，会报错。

```TS
let str: string = "hi";
// error next line
str = 12;
//此时会报错，因为后来赋值不是string
```

## 类型断言 as Type

通过 as Type 来断言类型。

案例：

```TS
let numArr: number[] = [1, 2, 3];
const result = numArr.find((number) => number > 2);
// error next line
const test = result * 5;
//错误原因是：'result' is possibly 'undefined'.
```

如果 find 没有找到元素，那么 result 就可能是 undefined，那么我们的计算就会出错。

假设我们已知，result 是必然有一个 number 结果的（必然大于 2 的结果），
那么我们可以做类型断言来规避错误：

```ts
let numArr: number[] = [1, 2, 3];
const result = numArr.find((number) => number > 2) as number;
// correct next line
const test = result * 5;
```
