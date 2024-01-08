---
sidebar_position: 2
---

# For 循环语句

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

### Enhanced For 循环

Java5 引入了一种主要用于**数组**的增强型 for 循环，

:::tip
实际上就是 JS 中的 for...in...循环，只是 JAVA 语法不太一样。

要注意 JAVA 中时刻要记得加参数类型
:::

语法格式如下:

```Java
int [] numbers = {10, 20, 30, 40, 50};

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

## 循环控制语句

### break 关键字

break 主要用在`循环语句`或者 `switch 语句`中，用来**打断**循环。

使用了 break，循环就会结束，不再继续。与 JS 相同。

```Java title="Break"
int [] numbers = {10, 20, 30, 40, 50};

for(int x : numbers ) {
    if( x == 30 ) {
      // correct next line
      break;
    }
    System.out.println( x );
}

// result: 10, 20
```

### continue 关键字

continue 适用于任何循环控制结构中。作用是让程序立刻跳转到**下一次循环**的迭代。

在 for 循环中，continue 语句使程序立即跳转到`increment 更新语句`。

在 while 或者 do…while 循环中，程序立即跳转到布尔表达式的`判断语句`。

与 JS 相同。

```Java
int[] numbers = {10, 20, 30, 40, 50};

for (int x : numbers) {
    if (x == 30) {
        continue;
    }
    System.out.println(x);
}

// result: 10 20 40 50
```
