---
sidebar_position: 2
---

# Scanner 类

Scanner 是 Java5 的新特征，我们可以通过 Scanner 类来**获取用户的输入**。

通过 System.in，来读取输入信息。

```java title="创建 Scanner 对象的基本语法"
Scanner sc = new Scanner(System.in);
```

通过 Scanner 类的 next() 与 nextLine() 方法获取输入的字符串。

在读取前我们一般需要 使用 `hasNext` 与 `hasNextLine` 判断是否还有输入的数据。(逻辑跟 JS 差不多)

:::note PS：读取 File 中的输入
创建 Scanner 类的时候，传入一个 File 类的实例。了解更多 File 类，可以前往[这篇笔记](./fileClass.md)

```java title="读取File中的输入"
Scanner sc = new Scanner(new File("nameOfFileOnFileSystem"));
```

:::

## nextLine

先放一下 nextLine 的使用案例，练习的时候使用了 nextLine 的方法。

nextLine()返回的值就是刚刚输入的值。

```java title="nextLine example"
public static String getInputFromScanner(int currentYear) {
  // 1.创建实例
  // correct next line
  Scanner scanner = new Scanner(System.in);

  System.out.println("Hi, What is your name?");
  // 2.调用实例方法
  // correct next line
  String name = scanner.nextLine();
  System.out.println("Hi " + name + ", Enjoy the coding!");

  return "";
}
```

运行效果：
![运行 Scanner 动图](../images/Scanner-example.gif)

## next

next 与 nextLine 的使用情景类似，语法也类似，都是调用 Scanner 实例上的方法来获取。

这里是菜鸟文档的示例：

```java
import java.util.Scanner;

public class ScannerDemo {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        // 从键盘接收数据

        // next方式接收字符串
        System.out.println("next方式接收：");
        // 判断是否还有输入
        // correct next line
        if (scan.hasNext()) {
            String str1 = scan.next();
            System.out.println("输入的数据为：" + str1);
        }
        scan.close();
    }
}
```

## next 与 nextLine 差别

next() 与 nextLine() 区别

### next():

- 一定要读取到有**效字符后**才可以结束输入。
- 对输入有效字符之前遇到的**空白**，next() 方法**会自动去掉**。
- 只有输入有效字符后才将其**后面输入的空白**作为**分隔符或者结束符**。

`next() 不能得到带有空格的字符串。`

### nextLine()：

- 以 Enter 为结束符,也就是说 nextLine()方法返回的是**输入回车之前的所有字符**。
- 可以获得空白。

(逻辑上说，输入 enter 为结束似乎比较好一点)

## 获取输入的数字

之后在写，暂时没用到。可以参考菜鸟文档 [Scanner 类](https://www.runoob.com/java/java-scanner-class.html)
