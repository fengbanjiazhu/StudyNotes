---
sidebar_position: 1
---

# 概念

什么是流程控制？

就是运行 JAVA 语句的逻辑，条件等等。实际上就是 if...else，switch， for...loop 循环

## switch

switch 语句和 JS 中的一样，不需要说太多，放一个简单的例子。

```JAVA
switch (i) {
    case 0:
        System.out.println("0");
        break;
    case 1:
        System.out.println("1");
        break;
    case 2:
        System.out.println("2");
        break;
    default:
        System.out.println("default");
}
```

需要注意的是：
:::warning Valid Switch Value Types
`byte`, `short`, `int`, `char`

`Byte`, `Short`, `Integer`, `Character`

`String`, `enum`

//也就是 long, float, double, boolean 类型不可以使用。
:::
