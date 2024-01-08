---
sidebar_position: 3
---

# While 循环

While 循环主要用在不确定循环次数的时候，如一只循环直到某个情况。

## while 循环

:::note Syntax

```Java 语法
while( 布尔表达式 ) {
  //循环内容
}
```

只要布尔表达式为 true，循环就会一直执行下去。
:::

```Java
public class Test {
   public static void main(String[] args) {
      int x = 10;
      while( x < 20 ) {
         System.out.println("value of x : " + x );
         x++;
      }
   }
}
```

## Do While 循环

对于 while 语句而言，如果不满足条件，则**不能进入循环**。

但有时候我们需要即使**不满足条件**，也至少**执行一次**。

do…while 循环和 while 循环相似，不同的是，`do…while 循环至少会执行一次`。

:::note Syntax

```Java 语法
do {
//代码语句
}while(布尔表达式);
```

do…while 循环至少会执行一次，而且一定要以 semi-colon `；`结尾
:::

:::warning
布尔表达式在循环体的**后面**，所以语句块在检测布尔表达式之前已经执行了。 如果布尔表达式的值为 true，则语句块一直执行，直到布尔表达式的值为 false。
:::
