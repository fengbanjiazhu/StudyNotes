---
sidebar_position: 1
---

# 基础

当创建 Java 的类的时候，本质上都是扩展了一个特殊的 Java 类。

这个特殊 Java 类叫做 `Object类`，他在 `java.lang` 包中。

java.lang 包是 java 语言的核心，它提供了 java 中的基础类。包括基本 Object 类、Class 类、String 类、基本类型的包装类、基本的数学类等等最基本的类。

## Java API 简介

Java 里有非常庞大的 API，其中有一些类库是我们必须得掌握的，只有熟练掌握了 Java 一些核心的 API，我们才能更好的使用 Java。

在程序中，java.lang 包并不需要像其他包一样需要 import 关键字进行引入。系统会自动加载，所以我们可以直接取用其中的所有类。

## java.lang 包装类

我们都知道 java 是一门面向对象的语言，类将方法和属性封装起来，这样就可以创建和处理相同方法和属性的对象了。

但是 java 中的基本数据类型却不是面向对象的，不能定义基本类型的对象。那如果我们想像处理对象的方式处理基本类型的数据，调用一些方法怎么办呢？

其实 java 为每个基本类型都提供了包装类。

| 基本类型 | 大小  | 包装类    |
| -------- | ----- | --------- |
| boolean  | /     | Boolean   |
| char     | 16bit | Character |
| byte     | 8bit  | Byte      |
| short    | 16bit | Short     |
| int      | 32bit | Integer   |
| long     | 64bit | Long      |
| float    | 32bit | Float     |
| double   | 64bit | Double    |
| void     | /     | Void      |

在这八个类名中，除了 Integer 和 Character 类以后，其它六个类的类名和基本数据类型一致，只是类名的第一个字母大写。
