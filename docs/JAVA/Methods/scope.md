---
sidebar_position: 2
---

# 作用域

Java 的作用域类似于 JS 中 const, let 创建的作用域:

- 必须先声明再使用。
- 只能应用于被创建的 code block 中。

```Java
public class Main {
  public static void main(String[] args) {
    // Code here CANNOT use x

    {
      // Code here CANNOT use x

      int x = 100;

      // Code here CAN use x
      System.out.println(x);
    }

  // Code here CANNOT use x
  }
}
```
