---
sidebar_position: 7
---

# 条件逻辑

主要是 JAVA 中的条件逻辑(conditional statement)语句，大部分与 JS 没有区别。

## if-else

类似于 JS 中的 `if...else`，运算逻辑几乎没有差别。

```Java
public class Hello {
    public static void main(String[] args) {
        boolean isAlien = true;

        if(isAlien) {
            System.out.println("Hello Alien");
        } else {
            System.out.println("No Alien!");
        }

        //  if no code block ↓
        if(isAlien)
            System.out.println("This line would not print");
        System.out.println("But this line will");
    }
}
```

## For Loop

老朋友了，与 JS 运算逻辑没有区别。

```java
for (int i = 0; i < 5; i++) {
  System.out.println(i);
}
```

### For-Each Loop

类似于 JS 中的 for...of 循环，来遍历一个数组。

:::warning
语法与 JS 的有些不同，没有语义，而是直接 `type variableName : arrayName`

```java
for (type variableName : arrayName) {
  // code block to be executed
}
```

:::

```java title="Example"
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String i : cars) {
  System.out.print(i + " ");
}
// result: Volvo BMW Ford Mazda
```

## Switch

与 JS 的 switch 运算逻辑几乎没有差别。

```java
int day = 4;
switch (day) {
  case 6:
    System.out.println("Today is Saturday");
    break;
  case 7:
    System.out.println("Today is Sunday");
    break;
  default:
    System.out.println("Looking forward to the Weekend");
}
```

## While Loop

与 JS 的 while 运算逻辑几乎没有差别。

```java
while (condition) {
  // code block to be executed
}
```

### Do...While Loop

与 js 的 do...while 也一样，满足 `while` 条件时，执行 `do` block 中的函数。

```java
int i = 0;
do {
  System.out.println(i);
  i++;
} while (i < 5);
```
