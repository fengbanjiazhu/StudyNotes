---
sidebar_position: 2
---

# 简介

一个 Java 程序可以认为是一系列对象的集合，而这些对象通过调用彼此的方法来协同工作。下面简要介绍下类、对象、方法和实例变量的概念。

Object：对象是类的一个实例，有状态和行为。

Class：类是一个模板，它描述一类对象的行为和状态。

Method：方法就是行为，一个类可以有很多方法。逻辑运算、数据修改以及所有动作都是在方法中完成的。

Parameters：每个对象都有独特的实例变量，对象的状态由这些实例变量的值决定。

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello Jeff");
        System.out.print("Hello World");
    }
}
```

:::note println
System.out.println()的打印会独占一行，上面两个打印会自动换行。
:::

![基础](../images/java-basic-1.jpeg)

## JAVA 关键词 keywords

JAVA 也有保留，预设的关键词。

[点击查看 Java 关键词 KeyWorks](https://docs.oracle.com/javase/specs/jls/se17/html/jls-3.html#jls-3.9)

### 关键字笔记

相关的关键字笔记

| Keywords     | notes & example                                                                        |
| ------------ | -------------------------------------------------------------------------------------- |
| new          | 创建新实例，大部分例子可以在 [Class 笔记中看到](../Class/basic)                        |
| abstract     | 抽象 关键字，可以在[抽象类笔记中看到](../Class/abstract)                               |
| static       | 静态 关键字，可以在[Class 笔记中看到](../Class/basic#class-中当静态与实例)             |
| public       | public 关键字，可以在 [Class 修饰符笔记中看到](../Class/modifiers)                     |
| protected    | 保护 关键字，可以在 [Class 修饰符笔记中看到](../Class/modifiers)                       |
| default/none | 默认 关键字，可以在 [Class 修饰符笔记中看到](../Class/modifiers)                       |
| private      | 私有 关键字，可以在 [Class 修饰符笔记中看到](../Class/modifiers)                       |
| import       | 引入 关键字，大部分例子可以在 [Class 笔记中看到](../Class/basic)                       |
| extends      | 继承 关键字，大部分例子可以在 [OOP 笔记中看到](../OOP/inheritance#继承关键字)          |
| implements   | 继承(接口)关键字，可以在 [Class 笔记中看到](../Advanced/interface#使用接口-implements) |
| super        | 父类 关键字，可以在 [OOP 笔记中看到](../OOP/inheritance#super)                         |
| this         | 子类 关键字，可以在 [OOP 笔记中看到](../OOP/inheritance#this)                          |
| final        | 最终 关键字，可以在 [OOP 笔记中看到](../OOP/inheritance#final)                         |
| Overridden   | 覆盖 关键字，可以在 [OOP 笔记中看到](../OOP/inheritance#overridden)                    |
| break        | 终止 关键字，可以在 [流程控制笔记中看到](../ControlFlow/loopControl#break-终止)        |
| continue     | 跳过 关键字，可以在 [流程控制笔记中看到](../ControlFlow/loopControl#continue-跳过)     |
| placeholder  | 关键字，可以在                                                                         |

## 变量 variables

在 Java 语言中，所有的变量在`使用前`必须声明。
声明变量的基本格式如下：

```
type identifier [ = value][, identifier [= value] ...] ;
```

type -- 数据类型。
identifier -- 是变量名，可以使用逗号 , 隔开来声明多个同类型变量。

```java title="初始化例子"
int a = 5;         // 声明三个int型整数：a、 b、c
byte z = 22;         // 声明并初始化 z
String s = "runoob";  // 声明并初始化字符串 s
double pi = 3.14159; // 声明了双精度浮点型变量 pi
char x = 'x';        // 声明变量 x 的值是字符 'x'。
```

```java title="不同类型分号分隔，同类型逗号分隔"
int myNum = 5; String myStr = "hello";
int d = 3, e = 4, f = 5;
```

### 重新赋值

重新赋值，直接更改就好，类似 var 和 let。

## JAVA 中，‘’与“”区别

- JAVA 中，不可以用‘’单引号代替“”双引号。
  - 单引号是 char 类型，双引号是 String 类型。
  - char 表示字符，定义时使用用单引号表示，只能存储一个字符。
  - String 表示字符串，定义时使用双引号表示，可以存储 0 个或多个字符,其实 String 类型就是 char 类型的数组表现形式。

```java title="单双引号区别"
char s = 'a';
// error next line
char s = "abc"; //报错

String m = "abc";
// error next line
String m = 'a'; //报错
```
