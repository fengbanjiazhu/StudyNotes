---
sidebar_position: 6
---

# Operator 运算符

代码无法脱离运算符，大部分 JAVA 的运算符与 JS 是类似的，少部分有微妙区别但是逻辑类似。

[点击查看 Java 运算符 Summary](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/opsummary.html)

[点击查看 JAVA 运算符优先级 Precedence](https://www.cs.bilkent.edu.tr/~guvenir/courses/CS101/op_precedence.html)

## 相似部分

### 计算符号 +-\*/

:::note
大部分计算与 JS 无异，有个需要注意的点是`JAVA中的char可以用来计算`
:::

![Operator1](../images/java-basic-operator-1.png)

#### 计算符号简写

简写方式与 JS 区别也不大。
![Operator2](../images/java-basic-operator-2.png)
![Operator3](../images/java-basic-operator-3.png)
![Operator4](../images/java-basic-operator-4.png)

#### 一元运算符 Unary Arithmetic Operators

这些运算符为前缀(pre-fix)或者后缀(post-fix), 并且只接受一个操作数。

- `+ positive operator`.这个其实没太大必要，可以直接写 a = +1。

- `- negative operator`. 将正数变负，负数变正。

- `++ 前缀`. 变量+1，返回增加后的变量。

- `++ 后缀`. 变量+1，返回增加前的变量

- `-- 前缀`. 同上，但是减法。

- `-- 后缀`. As before, but subtracts one.

:::warning
有一点要注意的是，在 `-=` 中，其实 JAVA 做了 `Casting`
一个例子了解一下：
![Example](../images/java-basic-operator-example1.png)

所以实际上 `X -= Y` 和 `(int) ( X - Y)` 是类似的
:::

### AND 符号 &&

与 JS 相同，为 `&&`

```java title="&&"
public class Hello {
    public static void main(String[] args) {
        int testNum = 12;

        if(testNum > 0 && testNum < 20) {
            System.out.println("test number is greater than 0 and less than 20!");
        }
    }
}
```

### OR 符号 ||

与 JS 相同，为 `||`

```java title="||"
public class Hello {
    public static void main(String[] args) {
        int testNum = 12;

        if(testNum < 5 || testNum > 10) {
            System.out.println("test number is either less than 5 or larger than 10!");
        }
    }
}
```

### 三元表达式 Ternary

三元表达式与 JS 也相同，`variable = (condition) ? expressionTrue :  expressionFalse;`

```java title="Ternary"
int time = 20;
String result = (time < 18) ? "Good day." : "Good evening.";
System.out.println(result);
```

## 不同部分

### Equality 运算符 (==)

**在 JAVA 中，==号是等于运算**，而不是 JS 中的===。

```java
public class Hello {
    public static void main(String[] args) {
        int testNum = 12;

        System.out.println(testNum == 13);   //false
    }
}
```

### Not Equality 运算符 (!=)

因为等于号的不同，JAVA 中不等号也不同，为 `!=`。

```java
public class Hello {
    public static void main(String[] args) {
        int testNum = 12;

        System.out.println(testNum != 20);   //true
    }
}
```

## 其他运算符

### 位运算符 Bitwise

Java 定义了位运算符，应用于**整数类型(int)，长整型(long)，短整型(short)，字符型(char)，和字节型(byte)**等类型。

位运算符作用在所有的位上，并且按位运算。假设 a = 60，b = 13;它们的二进制格式表示将如下：

```java
A = 0011 1100
B = 0000 1101
-----------------
A&B = 0000 1100
A | B = 0011 1101
A ^ B = 0011 0001
~A= 1100 0011
```

下表列出了位运算符的基本运算，假设整数变量 A 的值为 60 和变量 B 的值为 13：

| Operator | English                  | Description                                                                       | Example                          |
| -------- | ------------------------ | --------------------------------------------------------------------------------- | -------------------------------- |
| ＆       | bitwise and              | 如果相对应位都是 1，则结果为 1，否则为 0                                          | （A＆B），得到 12，即 0000 1100  |
| ｜       | bitwise or               | 如果相对应位都是 0，则结果为 0，否则为 1                                          | （A \| B）得到 61，即 0011 1101  |
| ^        | bitwise xor              | 如果相对应位**值相同**，则结果为 0，否则为 1                                      | （（A ^ B）得到 49，即 0011 0001 |
| 〜       | unary bitwise complement | 按位取反运算符翻转操作数的每一位, 0 变成 1，1 变成 0                              | （〜A）得到-61，即 1100 0011     |
| \<\<     | signed left shift        | 按位左移运算符。左操作数按位左移右操作数指定的位数                                | A \<\< 2 得到 240，即 1111 0000  |
| \>\>     | signed right shift       | 按位右移运算符。左操作数按位右移右操作数指定的位数                                | A \>\> 2 得到 15 即 1111         |
| \>\>\>   | unsigned right shift     | 按位右移补零操作符。左操作数的值按右操作数指定的位数右移，移动得到的空位以 0 填充 | A>>>2 得到 15 即 0000 1111       |

### (.)点运算符

".", 也称为 "点操作符"。对左操作数进行解引用以获取右操作数。本质上是“在左边的东西中，给我右边的带有名称的东西”。

### (::)命名空间运算符

a::b 从类 a 中获取方法 b。这个运算符主要用于当你想要将函数命名为 lambda 表达式的参数（而不是调用它）时。

:::info Lambda
Lambda 表达式是函数式编程的一种体现，它允许将函数当作参数传递给方法，或者将函数作为返回值，这种支持使得 Java 在函数式编程方面更为灵活，能够更好地处理集合操作、并行计算等任务。
:::
