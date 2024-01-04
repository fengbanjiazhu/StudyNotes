---
sidebar_position: 3
---

# 方法重载 Overload

在 JAVA 中，可以创造有`相同名字`但`参数不同`的方法，这个就叫做 Overload。

来看一下例子：

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

我们可以使用`不同类型的参数`来调用他，JAVA 会根据参数类型来决定调用哪个方法。

比如上面的 double 与 int 不同，当然也可以是 String。这么一说好像有点类似 TS 中的泛型(generics)。

## JAVA 如何实现 Overload？

在 JAVA 中，会有一个 `unique signature`。

他由：参数的 type，order，数量，(参数名字并不重要)，结合 method name，来使 method 签名独一无二。

这个独特的签名就是 JAVA 编译器 用来判断是否正确的重载了方法。

```Java
// correct next line
下面两个通过param的type不同来分辨。
public static void doSomething(int parameterA) {
  // method body
};
public static void doSomething(float parameterA) {
  // method body
};

// correct next line
下面两个通过param的order不同来分辨。
public static void doSomething(int parameterA, float parameterB) {
  // method body
};
public static void doSomething(float parameterA, int parameterB) {
  // method body
};

// correct next line
下面一个通过param的number不同来分辨。
public static void doSomething(int parameterA,int parameterB, float parameterC) {
  // method body
};
```

## 应用

尝试了一下，感觉 Overload 很适合用在比如游戏制作，网页中。

没登录的时候，和登陆了之后调用的都是一个方法，只是传入的 param 不同，结果也不同。

```Java
public class OverloadTest {
    public static void main(String[] args) {
        calculateScore("Jeff", 500);
        calculateScore(1800);
    }

    public static int calculateScore(String playerName, int score) {
        System.out.println(playerName + " has earned " + score + " scores");
        return score + 200;
    }

    public static void calculateScore(int score) {
        System.out.println("Unnamed player has earned " + score + " scores");
    }
}

// result：
// Jeff has earned 500 scores
// Unnamed player has earned 1800 scores
```

一点点改变：

```Java
public class OverloadTest {
    public static void main(String[] args) {
        int firstScore = calculateScore("Jeff", 500);
        System.out.println(firstScore);
        int secondScore = calculateScore(1800);
        System.out.println(secondScore);
    }

    public static int calculateScore(String playerName, int score) {
        System.out.println(playerName + " has earned " + score + " scores");
        return score + 200;
    }

    public static int calculateScore(int score) {
      // highlight-next-line
        return calculateScore("Anonymous", score);
    }
}

// result：
// Jeff has earned 500 scores
// 700

// Anonymous has earned 1800 scores
// 2000
```
