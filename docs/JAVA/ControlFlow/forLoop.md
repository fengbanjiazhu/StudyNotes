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
