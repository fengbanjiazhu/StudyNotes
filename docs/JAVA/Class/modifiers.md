---
sidebar_position: 2
---

# 类修饰符

我们使用修饰符的时候，根据不同情况，修饰符是不能使用的，所以我们要先明白一个问题，什么是外部类(Top-level Class)？

## 外部类

如何判断 Class 是一个 top-level Class？

- 在 source code file 声明
- 没有封装在任何其他 Class，Type 或者 Methods 中。

### top-level Class 修饰符

**外部类**的修饰符只有 2 个：public，none。

| Access Keyword | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| public         | public 指所有其他 class(任何包) 都有权限访问这个类                     |
|                | 当不声明修饰符的时候为 package access，只有同包内的 Class 才有权限访问 |

## 其余修饰符

| 修饰符       | 描述                                                                                |
| ------------ | ----------------------------------------------------------------------------------- |
| public       | 对所有类可见。使用对象：类、接口、变量、方法                                        |
| protected    | 对同一包内的类和所有子类可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）** |
| default/none | 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。                  |
| private      | 在同一类内可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）**               |

### private

测试了一下 private 字段，结果就是我们并不可以在外部设置/获取这些数据

```java title="Car.java"
Car newCar = new Car();
newCar.make = "Mazda";
newCar.describeCar();
// 成功打印出 "Mazda Car"
```

```java title="TestClass.java"
Car newCar = new Car();
// error next line
newCar.make = "Mazda";
newCar.describeCar();
// 报错，不能设置private字段

// error next line
System.out.println(newCar.make);
// 报错，尝试访问private字段
```

如果想要从外部使用/获取 private 字段，则需要使用 Class 中的 Setter 与 Getter。[查看相关笔记](./setterAndGetter)

:::note JS 中的私有字段，与 Getter 和 Setter

现在我也算是更加理解当初 JS 开发中的私有字段与 getter 和 Setter 的使用 了。

JS 很多编程思想是从 JAVA 中来的，而 JS 中又没有 private 私有字段，当时通过使用 `_field` 增加下划线的方式来设置为私有字段，防止被直接篡改或读取。

下次再将这部分笔记放入 JS 的部分。
:::
