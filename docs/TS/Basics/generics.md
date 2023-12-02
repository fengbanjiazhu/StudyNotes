---
sidebar_position: 6
---

# Generics 泛型

泛型（Generics）是指在定义函数、interface 或 type alias 的時候，不预先指定具体的类型，而在**使用的時候再指定类型**的一種特性。
有点类似 `placeholder`。

## 需求情景

我们制定了一个函数，可以处理 number。

```TS
function myFn(a:number, b:number): number[] {
  return [a,b]
}
```

后期我们发现，我们也想使用它来处理 string。我们可以直接 number ｜ string 吗？
显然不可以，可能会导致结果中既有 number，也有 string，
导致交叉使用。（如传入了 1，“a”也不报错）。

所以我们需要使用泛型，直到 call 函数的时候，再传入类型。

## 创建，使用泛型

只需要调用函数的时候，将类型写入`< >`再调用，就会自动检查。
T 在这里就是占位符，变量，以后写入什么就会变成什么。

一般约定俗成情况下，泛型使用符号 `T`，也可以使用其他字母，如 K 等。

```TS title="Generics 创建"

const fn = function <T>(a: T, b: T): T[] {
  return [a, b];
};

const fn2 = function <T, K>(a: T, b: K): [T, K] {
  return [a, b];
};
```

```TS title="Generics 使用"
type User = {
  name: string;
  age: number;
};

type DataStorage<T, U> = {
  storage: T[];
  extraField: U;
  add: (data: T) => void;
};
// correct next line
const textStorage: DataStorage<User, number> = {
  storage: [{ name: "Jeff", age: 28 }],
  extraField: 2,
  add (data) {},
  // (parameter) data: string
};
```

如上图中，使用 DataStorage 的 Type alias 时，我们传入了两个类型：User 与 number。
至此，我们的 storage 域会将由 Array of User 组成。
