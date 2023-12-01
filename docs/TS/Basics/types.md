---
sidebar_position: 3
---

# 类型 Types

TS 是基于类型的语言，TS 和 JS 的类型有些许不同，有基本类型，还有复杂类型。

## 基本类型

### Any

声明为 any 的变量可以赋予任意类型的值。但是一般不建议使用，否则丧失了使用 TS 的意义。

### String

一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。

```TS title='String'
let name: string = "Jeffrey";
let words: string = `您好，我是 ${name} `;
```

### Number

双精度 64 位 Float。它可以用来表示整数和分数。

```TS title='Number'
let decLiteral: number = 6; // 十进制
```

### Boolean

True 和 False。

```TS title='Boolean'
let flag: boolean = true;
```

### Null

表示对象值缺失。

Null 用的比较少，因为 null 类型只有一个 null，
那为什么还要拥有 null/undefined 这种类型呢？
因为 TS 中还有一个联合类型

### Undefined

用于初始化变量为一个未定义的值。

## 基础联合类型

他可以是某几个类型中的一个，一般有时候会加入 null 等类型。

```TS
let combine: number | string | null = 1;
combine  = "Hi";
combine  = null;

// error next line
combine  = true;
```

## 特殊类型

### Array 数组

与 JS 不同，TS 中没有一个“数组”类型，而是通过 Type[]来声明变量为数组。

```TS title='Array'
// 在元素类型后面加上[]
let arr: number[] = [1, 2];

// 或者使用数组泛型
let arr: Array<number> = [1, 2];
```

### Tuple 元组

元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应**位置**的类型需要相同。

```TS title='Tuple'
let x: [string, number];

// correct next line
x = ['Jeffrey', 1];

// error next line
x = [1, 'Jeffrey'];
```

当我们的数据没有按照要求传入的时候，就会报错。（大型应用中很方便我们发现错误）
难道我们必须说明要传入的所有值吗？也不一定。

```TS
// error next line
let tupleError: [string, number,number] = ["Jeff", 1];

// correct next line
let tupleCorrect: [string, number,number?] = ["Jeff", 1];
```

### Enum 枚举

枚举类型用于定义数值集合。在枚举类型中，键值是相互对应的。

```TS title='Enum'
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2
```

Red, Green, Blue 与 0，1，2 互相对应

### Void

void 只能被赋值 undefined，一般主要用在函数中。**当函数没有返回值的时候**，类型就是 void。

```TS title='Enum'
function hello(): void {
    alert("Hello");
}
```

<!--  -->
