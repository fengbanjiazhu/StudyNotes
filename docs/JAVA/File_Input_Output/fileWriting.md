---
sidebar_position: 3
---

# 写入文件

同样地，Java 有许多写入文件的方法，目前只看一个简单的基于字符的方法。

## PrintWriter

PrintWriter 类使用与所有 Java 输出相同的结构设置（写入器 -> 输出流 -> 目标），但允许对文件进行一些快捷方式（基本上它会处理输出流并创建目标文件）。

基本设置如下：

```java
PrintWriter pw = new PrintWriter("foo.txt")
```

这使得它成为 Java I/O 库中可能最简单的东西。

当然，它可以以许多方式进行修改，PrintWriter 的文档提供了一些相关信息。

```java
import java.io.PrintWriter;
import java.io.FileNotFoundException;

public class PRExample {
    public static void main(String[] args) {

        try {
          // correct-start
            PrintWriter pr = new PrintWriter("foo.txt");

            pr.println("This will be printed in the file.");

            pr.close();
          // correct-end

        }
        catch (FileNotFoundException e) {
            System.err.println("Uh oh, no file.");
        }
    }
}

// 运行之后console给我跳出一个文件
```
