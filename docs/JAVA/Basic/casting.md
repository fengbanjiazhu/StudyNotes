---
sidebar_position: 5
---

# Casting 与运算符

## Casting

Casting 即类型转换。

### issue

JAVA 中，带有变量的计算结果默认为 int 类型。
因为 JAVA 不知道变量的数字，不确定结果，无法准确的创建给有范围的数字类型变量（如 short, byte）

```java title="Issue"
int myNum = 128;
byte byte1 = 128 / 2;  // byte1 => 64
// error next line
byte byte2 = myNum / 2;  // error
```

例如上面的例子，理论上`myNum / 2 = 64`， 结果应该是可行的，但是报错了。
（因为含有变量的运算结果默认为 int）

### casting

所以，我们需要额外转换一下 `casting`，才能防止报错

```java title="Casting"
// correct next line
byte byte2 = (byte)(myNum / 2);  // byte2 => 64
```

当然，如果超出了类型范围仍然 casting 的话，结果就是溢出(Overflow)：

```java title="Overflow"
int bigNum = 12000;
byte byteTest = (byte)(bigNum / 2);  // byteTest => 112
```

## 运算符

运算符部分与 JS 类似

![Operator1](../images/java-basic-operator-1.png)

:::note
记住 char 是可以使用这些运算的
:::

![Operator2](../images/java-basic-operator-2.png)
![Operator3](../images/java-basic-operator-3.png)
![Operator4](../images/java-basic-operator-4.png)

:::warning
有一点要注意的是，在 `-=` 中，其实 JAVA 做了 `Casting`
一个例子了解一下：
![Example](../images/java-basic-operator-example1.png)

所以实际上 `X -= Y` 和 `(int) ( X - Y)` 是类似的
:::
