---
sidebar_position: 1
---

# switch

什么是流程控制？

就是运行 JAVA 语句的逻辑，条件等等。实际上就是 if...else，switch， for...loop 循环

## 基础使用

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

## Enhanced switch statement

JAVA 有一个增强版的 switch 条件语句，使用了箭头函数，简化了语法，来看一个例子

:::danger 注意
JAVA 的箭头函数是`->`，和 JS 的箭头函数`=>`不一样。
:::

```JAVA title="Enhanced"
public static String getQuarter(String month) {
  return switch (month) {
      case "JAN", "FEB", "MAR" -> "1st";
      case "APR", "MAY", "JUN" -> "2nd";
      case "JUL", "AUG", "SEP" -> "3rd";
      case "OCT", "NOV", "DEC" -> "4th";
      default -> {
          System.out.println("ERROR");
          // highlight-next-line
          yield "Wrong Value";
      }
  };
}
```

:::tip 一些注意点

- 该方法声明必须返回一个 String，箭头函数不需要加 return 别忘了。
- 如果想要添加一个 block，里面返回值不能写 return，而是要写 `yield`。
  :::
