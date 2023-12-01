---
sidebar_position: 4
---

# 接口与类型别名 interface 与 type alias

当我们在给值定义类型的时候，使用的方法都是在类型注释中直接定义的 ，这样定义的 对象类型 与 联合类型 固然很方便，但是在我们需要多次使用此类型去定义的时候，可以使用 **接口**，或者**类型别名**来防止重复代码。

接口 interface 与 类型别名 type Alias 作用差不多，他们有着微小的区别，可以始终使用一种（如 type alias）。

## 类型别名 Type Alias

### Type Alias 基础

Type alias 对比 interface 有一个优势，就是可以规定非 Object 的类型。

```TS title="Type Alias"
type Person = {
  name:string,
  age:number
};
type MyUserName = number | string;


// correct-start
let jack : Person = {
  name: 'Jack',
  age:18
};

let username : MyUserName = 123456;
// correct-end
```

### Type Alias 继承 intersecting &

Alias 有交叉的特点，可以通过 **&** 的写法来继承 type 或 interface，得到一个交叉类型

```TS title="Alias intersecting"
type Student = {
  name:string
}
//  使用 & 进行扩展
type AusStudent = {
  school:string
} & Student

// correct-start
let me : AusStudent = {
  name:'Jeffrey',
  school:'UTS',
}
// correct-end
```

## 接口 interface

### Interface 基础

接口只可以规定 object 类型，规定内部数据域与类型。
通用的命名规则是以大写 `字母 I` 开头。

```TS title="Interface"
//一般接口名称都是大写，且不用写等于号
interface IPerson {
  name: string;
  age: number;
}

//使用方式与类型一致
let jack: IPerson = {
  name: "Jack",
  age: 18,
};

// 如果强行规定string，则会出错：
// error next line
interface URL = string;
```

Interface 无法实现 Type Alias 中，let username : MyUserName = 123456; 类似的操作。

### Interface Extends 继承

```TS title="Interface"
interface Shape {
  x: number;
  y: number;
}

// 继承扩展
interface Rect extends Shape {
  width: number;
  height: number;
}
// correct next line
const rect: Rect = { x: 0, y: 0, width: 0, height: 0 };
```

### Interface 声明合并

Interface 可以声明合并，文件下多个同名的 interface，它们的属性会进行合并。（而 type 不支持，一个作用域内不允许有多个同名 type）

```TS title="Interface"
interface IPerson {
  name: string;
}
interface IPerson {
  sex: "male" | "female";
}

// correct next line
const student: IPerson = {name:"Jeff", sex:"male"}
```

需要注意的是，**同名属性的不能进行类型覆盖修改**，否则编译不通过。比如我先声明属性 x 类型为 number，然后你再声明属性 x 为 string | numebr，就像下面这样，编译器会报错。

```TS title="Interface"
interface Point {
  x: number;
}

interface Point {
  // error next line
  x: string | number;
  // Property 'x' must be of type 'number', but here has type 'string | number'.
  y: number;
}
```
