---
sidebar_position: 4
---

# ArrayList

ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制，我们可以添加或删除元素。

ArrayList 继承了 AbstractList ，并实现了 List 接口。

真正的 TS 数组！

ArrayList 的**查找和修改效率很高**，但是增加和删除的效率略低(与 [LinkedList](./linkedList) 相比)

## 推荐使用 ArrayList 的情况

- 频繁访问列表中的某一个元素。
- 只需要在列表末尾进行添加和删除元素操作。

## 创建 ArrayList

```java
// 引入 ArrayList 类
import java.util.ArrayList;

// 初始化
ArrayList<E> objectName = new ArrayList<E>();　

// 初始化直接插入数据
List<Integer> testList = new ArrayList<>(List.of(1,3,2,7,5,8,4));
```

:::tip
这里演示了范型，也是 Java 第一次接触这个，虽然大部分应该和 TS 一样，但是最好还是建立[一篇笔记来说](../../Advanced/generic)。

这里的 E 类型参数只能由类名/类型替换。不能使用原始类型，而是[包装类](../../Class/wrapperClass/basic)。
:::

## 方法

ArrayList 是一个数组队列，提供了相关的添加、删除、修改、遍历等功能。

### 添加

ArrayList 类提供了很多有用的方法，添加元素到 ArrayList 可以使用 add(E element)方法。E 是 type

```java
ArrayList<String> names = new ArrayList<String>();

names.add("Jeff");
names.add("Sara");
```

#### 插入元素

add(int index, E element) 在位置 index 处插入元素。

如果这在当前列表的末尾之前，它会将所有元素向右移动，以免覆盖任何内容。

### 替换元素

set(int index, E element)：用 element 替换索引 index 处的元素（不进行移动）。

:::danger
注意，经过我的实验，set 不能用于替换不存在的元素，会报错。
:::

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Jeff");
names.add("Sara");

names.set(1, "Jeff");
System.out.println(names);
// [Jeff, Jeff]

// error next line
names.set(3, "Jeff");
//报错，长度只有2
```

### 访问

访问 ArrayList 中的元素可以使用 get(index) 方法

:::danger
注意，ArrayList 不可以使用 `ArrayList[index]` 访问，只可以使用 `get()`
:::

```java
System.out.println(names.get(1));

// Sara
```

### 修改元素

如果要修改 ArrayList 中的元素可以使用 `set(index, newElement)` 方法：

```java
names.set(1, "Jeffrey");
System.out.println(names.get(1));
// Jeffrey (Not Sara anymore)
```

### 删除元素

如果要删除 ArrayList 中的元素可以使用 remove() 方法：

```java
names.remove(1);
System.out.println(names);
// [Jeff] (Only 1 left)
```

### 计算大小

如果要计算 ArrayList 中的元素数量可以使用 size() 方法：

```java
names.add("Jeff");
names.add("Sara");

int size = names.size();
System.out.println(size);
// 2
```

### 查询是否包含

contains(Object o)：如果 o 在列表中，则返回 true。由于每个类都继承自 Object，因此这适用于任何对象

(在开始使用 Object 作为类的名称以及对象时，这会让人感到困惑，只需注意大小写、字体和上下文即可)

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Jeff");
names.add("Sara");

System.out.println(names.contains("Jeff"));
// true
```

### 查询 index

indexOf(Object o)：如果 o 在列表中，则返回其索引（作为 int），如果根本不在列表中，则返回-1。

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Jeff");
names.add("Sara");

System.out.println(names.indexOf("Jeff")); // 0
System.out.println(names.indexOf("Test")); // -1
```

### forEach 循环

Wow！简直和 JS/TS 的循环一模一样

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Jeff");
names.add("Sara");
// correct next line
names.forEach(name -> {
    System.out.println(name);
});
// Jeff
// Sara
```

## 优缺点

ArrayList 还有许多方法、相关类和属性还没有涉及（也不准备涉及），但可以列举一些优缺点。

### 优点

- 自动调整大小（它不仅仅是一次增加或减少一个元素，它会进行更智能的操作）。

- 在内部实际上使用了一个数组（嗯，一系列数组）

  - 因此对于访问和迭代（即 get 和 set 工作得很快，这意味着 for-each 也很快，而且 add 通常和数组一样快，除了偶尔的调整大小操作）来说，它实际上和数组一样快。

- 类型参数保持了类型安全性

### 缺点

- 在内部使用数组，因此在中间插入元素可能会有点慢（只有在列表非常大或经常进行此操作时才会注意到）。
