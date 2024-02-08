---
sidebar_position: 1
---

# Formatter 格式化类

在说这个类之前，我们要先说一下 format 与占位符

## 占位符

在 Java 中，可以使用占位符来操作字符串的格式化和替换。

占位符是一种特殊的标记，用于指定将来要替换的值的位置。

Java 中常用的占位符是`%`符号，后面可以跟上格式说明符来定义替换值的**类型和格式**。

### 占位符使用例子

:::tip
直接使用 printf()

```java
System.out.printf();
```

:::

```java
System.out.printf("字母a的大写是：%c %n", 'A');
// 字母a的大写是：A
System.out.printf("3>7的结果是：%b %n", 3>7);
// 3>7的结果是：false
System.out.printf("100的一半是：%d %n", 100/2);
// 100的一半是：50
System.out.printf("50元的书打8.5折扣是：%f 元%n", 50*0.85);
// 50元的书打8.5折扣是：42.500000 元
```

#### 复杂应用例子

```java
public static void main(String args[]) {
    for (int i = 1; i <= 1000; i *= 10) {
      // highlight-next-line
      System.out.printf("Printing %d %n", i);
    }
}
// %d 打印结果：
// Printing 1
// Printing 10
// Printing 100
// Printing 1000

public static void main(String args[]) {
    for (int i = 1; i <= 1000; i *= 10) {
      // highlight-next-line
      System.out.printf("Printing %5d %n", i);
    }
}
// %5d 打印结果(每个数字要占用5个位置)：
// Printing     1
// Printing    10
// Printing   100
// Printing  1000
```

### 总结

我们发现了，使用占位符的时候，有对应的**类型**，我们需要严格按照类型传入变量，否则就会报错。

### 常用的格式化占位符

| 占位符 | Description                                  | Example   |
| ------ | -------------------------------------------- | --------- |
| %n     | 换行符                                       |           |
| %d     | 整数类型（十进制）Decimal integer            | 10        |
| %f     | 浮点类型 floating point                      | 99.99     |
| %s     | 字符串类型 String                            | "example" |
| %c     | 字符类型 char                                | "c"       |
| %b     | 布尔类型 boolean                             | true      |
| %tx    | 日期与时间类型（x 代表不同的日期与时间转换符 | --        |

## 格式化 format

直接的格式化可以使用 String 的方法来达成。

创建一个包含占位符的字符串。占位符以%开头，后面可以跟上格式说明符。

然后使用 String.format()方法对字符串进行格式化和替换。

```java
String message = "Hello, %s! Today is %s.";
// %s是字符串类型的占位符

String name = "Jeff";
String day = "Monday";

String formattedMessage = String.format(message, name, day);
// Hello, Jeff! Today is Monday.
```
