---
sidebar_position: 2
---

# For 与 For-Each 循环

## For 循环

与 JS 类似，也是初始化，只是语法变成了 JAVA 版本。

:::note Syntax

```JAVA title="语法"
for(init; expression; increment) {
    //代码语句
}
```

:::

来看个例子，记得千万不要把初始化 int 写成 let/const。

```JAVA
for (int i = 1; i <= 10; i++) {
    if (i > 8) break;
    System.out.println(i);
}
// result: print 1 - 8
```

### for 循环的神奇应用

#### 缺失两个参数

Java 中的 for loop 可以有各种神奇的应用效果，我们来简单看一下(是 Dr Luke 在对比 For loop 与 While loop 时展示的)

```JAVA title="模拟while loop"
int i = 1;

// correct next line
//注意这里缺失的两个参数
for (;i <= 10;) {
    System.out.println(i);
    i++;
}
// result: print 1 - 10
```

#### 缺失三个参数

```JAVA title="模拟while loop"
int i = 1;

// correct next line
//注意这里缺失的三个参数
for (;;) {
    System.out.print("Enter 1 if you want to stop: ");
    if (sc.nextInt() == 1) break;
}
// result: run code until enter 1
```

#### 无 body 循环

我们在 Java 中，可以进行无参数循环，如下

```java
for (int i = 0; i < 10; ++i);
```

这段代码似乎起不到什么作用，但是我们可以换个代码来看看：

```java
int sum = 0;
for (int i = 0; i <= 10; sum += i++);

System.out.println(sum);
// 55

for (int i = 0, sum = 0; i <= 10; System.out.println(sum += i++));
```

我们可以通过将部分语句直接写入**循环体**，来达到一些目的。

## Enhanced For 循环 (For-Each)

Java5 引入了一种主要用于**数组**的增强型 for 循环，

:::tip
实际上就是 JS 中的 for...in...循环，只是 JAVA 语法不太一样。

要注意 JAVA 中时刻要记得加参数类型 `type variableName : arrayName`

```java title="语法"
for (type variableName : arrayName) {
  // code block to be executed
}
```

:::

:::warning
不能应用于 String， 也就是不能把 String 中的 char 来循环。
:::

看一下 JAVA 中的使用

```Java
int [] numbers = {10, 20, 30, 40, 50};

// highlight-next-line
for(int x : numbers ){
    System.out.print( x + "," );
}
// result: 10,20,30,40,50,
String [] names ={"James", "Larry", "Tom", "Lacy"};
for( String name : names ) {
    System.out.print( name + ",");
}
// result: James,Larry,Tom,Lacy,
```
