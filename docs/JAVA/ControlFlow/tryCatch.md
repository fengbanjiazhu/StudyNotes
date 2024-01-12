---
sidebar_position: 6
---

# try...catch

JAVA 的 try...catch 与 JS 的没区别，使用的逻辑自己也知道，基础的笔记省略了。

直接放一个 try...catch...finally 的代码案例参考

```JAVA
public class Main {
  public static void main(String[] args) {
    try {
      int[] myNumbers = {1, 2, 3};
      System.out.println(myNumbers[10]);
    } catch (Exception e) {
      System.out.println("Something went wrong.");
    } finally {
      System.out.println("The 'try catch' is finished.");
    }
  }
}
```

## Exception e

需要注意的一点是 catch 的 `Exception e`

暂时还没有接触太多，留空

目前看来 JAVA 中大多数错误都有自己的类型，现在遇到了 NullPointerException e

```JAVA
public static void main(String[] args) {
    int currentYear = 2024;
    try {
        System.out.println(getInputFromConsole(currentYear));
    } catch (NullPointerException e) {
        System.out.println(getInputFromScanner(currentYear));
    }
}
```

:::note 就是值为 null 了
NullPointerException occurs when a variable that is being accessed has not yet been assigned to an object.

In other words, the variable is assigned as null
:::
