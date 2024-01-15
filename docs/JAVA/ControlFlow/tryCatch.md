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

JAVA 中大多数错误都有自己的类型，也要根据不同的错误输出不同的处理方式。

### NullPointerException

错误情况：变量为 null。

NullPointerException occurs when a variable that is being accessed has not yet been assigned to an object.

In other words, the variable is assigned as null

```JAVA
public static void main(String[] args) {
    int currentYear = 2024;
    try {
        System.out.println(getInputFromConsole(currentYear));
    // highlight-next-line
    } catch (NullPointerException e) {
        System.out.println(getInputFromScanner(currentYear));
    }
}

// 此处为当变量/数值为空的时候，调用另一个函数
```

### NumberFormatException

错误情况：number 格式转换失败。

The NumberFormatException is an unchecked exception in Java that occurs when an attempt is made to convert a string with an incorrect format to a numeric value.

```Java
do {
    System.out.println("(Please enter a valid year between " + (currentYear - 125) + " and " + (currentYear) + " )");
    try {
        age = checkData(currentYear, scanner.nextLine());
        validDOB = age >= 0;
    // highlight-next-line
    } catch (NumberFormatException badUserData) {
        System.out.println("Characters not allowed! Please try again.");
    }

} while (!validDOB);

// 此处需要接收number，当输入String的时候会报错
```
