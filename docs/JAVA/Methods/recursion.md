---
sidebar_position: 5
---

# 递归 Recursion

JAVA 中当然也有递归！所有程序都脱离不了算法。

JAVA 的递归和 JS 的没有太大区别，都是创建一个函数，并且在函数内部调用自己。

:::note Example

Use recursion to add all of the numbers between 5 to 10.

```Java title="Recursion"
public class Main {
  public static void main(String[] args) {
    int result = sum(5, 10);
    System.out.println(result);
  }
  public static int sum(int start, int end) {
    if (end > start) {
      return end + sum(start, end - 1);
    } else {
      return end;
    }
  }
}
```

:::

:::tip Example Explained

- sum(5, 10)
- = 10 + sum(5, 9)
- = 10 + ( 9 + sum(5, 8) )
- = 10 + 9 + ( 8 + sum(5, 7) )

  ...

- = 10 + 9 + 8 + 7 + 6 + sum(5, 5)
- = 10 + 9 + 8 + 7 + 6 + 5
  :::
