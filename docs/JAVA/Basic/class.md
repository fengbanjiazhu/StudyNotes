---
sidebar_position: 4
---

# JAVA 类 Class

Java 是一门非常强大和流行的编程语言，它提供了许多自带的类，以便开发者能够更加高效地编写代码。这些类不仅提供了各种各样的功能，还帮助我们解决了很多常见的问题。

类可以理解为：

- 一种独特的数据类型
- 一个特殊的代码块，包含了一些方法

## Class 中当静态与实例

### 字段 Field

:::note Static 静态字段

静态字段 class 中定义的时候，需要使用 static 关键字。

字段 Value 会保存在一个特殊的 memory 位置中。

可以通过 `Class.fieldName` 来访问到该字段。

```Java
Integer.MAX_VALUE
```

:::

:::note Instance 实例字段

实例字段在 Class 中定义的时候不需要 static 关键字。

实例字段的 Value 在实例化之前不会占用任何位置。

创建实例后，通过 `Class.fieldName` 来访问到该 Value。

```Java
"hello".length()
```

:::

### 方法 Methods

:::note Static 静态方法

静态方法在 class 中定义的时候，需要使用 static 关键字。

静态方法可以**直接在 Class 上调用**，

```Java
Integer.parseInt("123");
```

:::

:::note Instance 实例方法

实例方法在 Class 中定义的时候不需要 static 关键字。

调用的时候**需要一个实例来调用**，如：

```Java
"hello".toUpperCase();
```

:::

## String 类

String 类是 Java 中非常常用的类之一，它用于表示字符串。String 类提供了许多方法来操作字符串，比如获取字符串的长度、连接字符串、截取子字符串等等。

```JAVA
public class AboutString1 {
    //String 类
    public static void main(String[] args) {
        //字符串（类）对象的生成方法
        //1、new 实例化
        String str1 = new String("第一种生成方法");
        //2、直接赋初值（字符串常量）
        String str2 = "第二种生成方法";

        //String 类的 length() 方法可以得到字符串的长度；
        System.out.println(str1.length());
        //String 类提供非常多的方法，使得字符串操作更方便；
        System.out.println(str1.substring(3,5));
        //前面提到过“String + 数值”，会产生自动转换类型……
        System.out.println(str3 + 321);
    }
}
```

:::warning
与 JS 不同的是，String 不可以乘法运算（如 JS 中，“50”\*1 = 50），但是数字还是会因为拼接字符串而变成字符串
:::
