---
sidebar_position: 1
---

# 基础

Java 方法是语句的集合，它们在一起执行一个功能。

- 方法是解决一类问题的步骤的有序组合
- 方法包含于类或对象中
- 方法在程序中被创建，在其他地方被引用

## 定义方法

JAVA 的方法定义与 TS 大不相同，需要声明修饰符，返回类型在前面，而不是 TS 那样在后面。

但是理论大概是类似的，都需要声明各种类型。

:::note Declaring 语法

```Java
修饰符/Modifiers 返回值类型/returnType 方法名/camelCase(参数类型 参数名){
    ...
    方法体
    ...
    return 返回值;
}

//
public static void/dataType methodName(p1type p1, p2type p2, {more...}){
// method body
}
```

:::

自己测试的使用的例子：

```Java
public class Main {
  static void nameMethod(String clientName) {
    System.out.println("Hi! " + clientName);
  }

  static int scoreMethod(boolean gameOver, int score, int level, int bonus) {
        int finalScore = score;
        if (gameOver) {
            finalScore += level * bonus;
        }
        return finalScore;
  }

  public static void main(String[] args) {
    nameMethod("Jeff");
    int myFinalScore = scoreMethod(false, 10000, 8, 200);
    System.out.println("Your final score is: " + myFinalScore);
  }

}
```

:::note
测试发现 JAVA 中的方法有 Hosting，即使我将 methods 放在 main 下面，也能正常调用。
:::

## 方法重载 Overload

在 JAVA 中，可以创造有`相同名字`但`参数不同`的方法。

```Java
public class Overload {
    static int plusMethod(int x, int y) {
        return x + y;
    }

    static double plusMethod(double x, double y) {
        return x + y;
    }

    public static void main(String[] args) {
      // correct-start
      int myNum1 = plusMethod(8, 5);
      double myNum2 = plusMethod(4.3, 6.26);
      // correct-end
      System.out.println("int: " + myNum1);
      System.out.println("double: " + myNum2);
    }
}
```

## psvm 快速创建 main snippets

使用 IntelliJ 时输入 psvm 可以快速创建 main snippets。(类似 React 的 rfce)

![psvm](../images/psvm.jpg)
