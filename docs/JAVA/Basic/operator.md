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
