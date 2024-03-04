---
sidebar_position: 4
---

# ArrayList

ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制，我们可以添加或删除元素。

ArrayList 继承了 AbstractList ，并实现了 List 接口。

真正的 TS 数组！

## 创建格式

```java
// 引入 ArrayList 类
import java.util.ArrayList;

// 初始化
ArrayList<Type> objectName =new ArrayList<Type>();　
```

## 方法

ArrayList 是一个数组队列，提供了相关的添加、删除、修改、遍历等功能。

### 添加

ArrayList 类提供了很多有用的方法，添加元素到 ArrayList 可以使用 add() 方法:

```java
ArrayList<String> names = new ArrayList<String>();

names.add("Jeff");
names.add("Sara");
```

### 访问

访问 ArrayList 中的元素可以使用 get() 方法

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
