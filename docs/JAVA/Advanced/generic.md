---
sidebar_position: 5
---

# Generic 范型

范型！老朋友了(感谢 TS)

Java 中的范型也是一样的，用做一个占位符，方便后续传入数据类型。

拿`ArrayList<E>`来说，在创建一个 ArrayList 时，你将 E 替换为你希望 ArrayList 存储的数据类型。E 被称为类型参数，规定了这个 ArrayList 中能拥有什么类型的数据。

当然就是为了安全，保证我们后续使用的时候不会因为传入错误的类型而报错。

注意，当你传入一些基础类型参数(如 int，boolean)的时候，要使用[包装类](../Class/wrapperClass/basic)。

## 创建范型例子

我们接下来要看看如何创建一个可以未来接受范型的 Class

```java
public class Box<T,K> {
  // correct next line
  private T data;
  private K data2;

  public Box() {
    this.data = null;
  }
  // correct next line
  public T getData() {
    return this.data;
  }

  public void setData(T param1, K param2) {
    this.data = param1;
    this.data2 = param2;
  }

  public void isEmpty() {
    return this.data == null;
  }

  // 在方法中规定范型
  // correct next line
  public <T> void ArrayList<T> listify(T[] arrayOfTs) {
    ...
  }

}
```

和 TS 几乎没区别，或者说 TS 的范型应该就是从 Java 中学到的？

## 使用范型例子

指定类型参数非常简单，和 TS 也相同。

只需将 `<[name]>` 追加到类名后面，其中将 `[name]` 替换为内部数据的类型（通常以大写字母开头，因为在使用时将被类或接口名称替换）。

而且，并没有类型参数数量的限制。( 比如经典的 `<T,K>` )

```java
public class TwinBox<Type1, Type2> {...}
```

### 例子

直接传入类型

```java
ArrayList<String> listOfStrings = new ArrayList<String>();
```

对于大多数泛型方法，类型可以被 inferred 推断出来，因此不需要指定(类型推断，和 TS 也一样)

```java
public <Type> ArrayList<Type> listify(Type[] arrayOfType) { ... }
...
//Somewhere else
ArrayList<String> listOfStrings  = listify(stringArray);
```

## 延伸

### 类型擦除 type erasure

在 Java 中，泛型是通过类型擦除 `type erasure` 来实现的。

本篇笔记参考了一些网上的文档，觉得疑惑或者想更深入的时候，随时回去[查看这里](https://openbytecode.com/article/java-base/docs/generic-erase)

:::tip 类型擦除 type erasure
严格来说，Java 的泛型并不是真正的泛型。Java 的泛型是 JDK1.5 之后添加的特性，为了兼容之前版本的代码，其实现引入了类型擦除的概念。

**类型擦除**指的是：Java 的泛型代码在编译时，由编译器进行类型检查，之后会将其泛型类型擦除掉，只保存原生类型，如 `Generics<Long>` 被擦除后是 Generics，我们常用的 `List<String>` 被擦除后只剩下 List。(为了兼容泛型之前的代码)

Java 的泛型实际上是由**编译器**实现的，将泛型类型转换为 Object 类型，在运行期间再进行状态转换。
:::

Java 编译器会在编译时尽可能的发现可能出错的地方，但是仍然**无法发现在运行时刻出现的类型转换异常**的情况，类型擦除也是 Java 的泛型与 C++ 模板机制实现方式之间的重要区别。

从一个例子来看，我们的 `Box<T>` 会被编译成了 Box Class。运行时，类型信息是不可用的（或者很难得到）。这会导致一些问题，比如永远无法创建泛型参数类型的新实例：

```java
T newT = new T(); //This is disallowed
T[] arrayOfTs = new T[5]; //So is this
```

这种方法的另外一些副作用是静态变量和方法不能具有泛型类型，也不能创建泛型异常类。

一个积极的副作用是 Java 只需要编译一次代码版本，然后在运行时使用，与 C++的方法相比，后者会根据类型参数的每个实例化选择重新编译代码（并且会对头文件/代码文件分离产生影响）。函数式语言通常更自然地处理这种类型的多态性。
