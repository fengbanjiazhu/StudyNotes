---
sidebar_position: 1
---

# Class 类基础

Java 是一门非常强大和流行的编程语言，它提供了许多自带的类，以便开发者能够更加高效地编写代码。这些类不仅提供了各种各样的功能，还帮助我们解决了很多常见的问题。

类可以理解为：

- 一种独特的数据类型
- 一个特殊的代码块，包含了一些方法

## 类，索引，实例与对象

首先我们要熟悉一下这几个关键词之间的关系，用一个建筑的例子来说

- Class 类似于蓝图，描述了房屋拥有的功能，外形，参数等。我们可以使用这个蓝图来造很多房子。
- Object 类似于房屋，我们根据蓝图建造的房屋，就是 Object。
- Instance 意思为实例，这里 Object 就是 Class 的实例，也就是说根据蓝图建造出来的屋子，就是蓝图的实际例子。
- Reference 指引用，出处。当我们建好房子后，他拥有地址，Reference 就是指向改地址的路线。
  - 在编程中，我们创建的实例实际上就存在于内存之中了，Ref 就是指向内存中，这个实例的地址。
  - 我们使用 Ref，来访问我们需要的文件。
  - PS：在 JAVA 中，我们也有 JS 一样的拷贝问题，我们需要注意如何拷贝，如何浅拷贝，如何深拷贝。

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

## 其他 Class 知识点

- 修饰符 modifier，[前往笔记](./modifiers.md)

- 分组 package，[前往笔记](./package.md)
