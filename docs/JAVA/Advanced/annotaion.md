---
sidebar_position: 2
---

# Annotation 注解

Java 注解（Annotation）又称 Java 标注。Java 语言中的类、方法、变量、参数和包等都可以被标注。

注解是一种元数据，元数据是一种形式化描述我们代码中所包含更多信息的方法，他更加结构化，也比注释更加有意义 - 因为他们可以被编译器，或者其他类型的预处理功能使用，获取关于代码的信息。

注解不会影响代码的运行，无论有没有都不影响代码。

## 内置的注解

Java 定义了一套注解，共有 7 个，3 个在 java.lang 中，剩下 4 个在 java.lang.annotation 中。

## 作用在代码的注解

### @Override 重写

检查该方法是否是重写方法。如果发现其父类，或者是引用的接口中并没有该方法时，会报编译错误。

读起来可能有点不懂，实际看个例子吧：

```java
class Animal {
    void eat() {
        System.out.println("animal : eat");
    }
}

class Dog extends Animal {
  void eat() {
    //这里是 Overload
    System.out.println("dog : eat");
  }
  // error next line
  @Override    // 这里会报错，因为父类没有sleep这个方法
  void sleep() {
    System.out.println("dog : sleeping");
  }
}

```

:::warning
Override 重写与 Overload 不同，重写是在参数相同的情况下，将方法改为另一个方法。
:::

### @Deprecated 弃用

@Deprecated - 标记过时方法。如果使用该方法，会报编译警告。(经典的已弃用)

### @SuppressWarnings 警告

@SuppressWarnings - 指示编译器去忽略注解中声明的警告。

## 作用在其他注解的注解(或者说 元注解)

### @Retention

@Retention - 标识这个注解怎么保存，是只在代码中，还是编入 class 文件中，或者是在运行时可以通过反射访问。

### @Documented

@Documented - 标记这些注解是否包含在用户文档中。

### @Target

@Target - 标记这个注解应该是哪种 Java 成员。

### @Inherited

@Inherited - 标记这个注解是继承于哪个注解类(默认 注解并没有继承于任何子类)

## Java7 后新注解

### @SafeVarargs

@SafeVarargs - Java 7 开始支持，忽略任何使用参数为泛型变量的方法或构造函数调用产生的警告。

### @FunctionalInterface

@FunctionalInterface - Java 8 开始支持，标识一个匿名函数或函数式接口。

### @Repeatable

@Repeatable - Java 8 开始支持，标识某注解可以在同一个声明上使用多次。
