---
sidebar_position: 2
---

# 文档读取

从文件中读取内容始于一个 File 类，该 Class 表示主机操作系统中文件系统中的文件。这个类将文件在主机操作系统中的表示和定位细节抽象了出来。

然而，对于文件 I/O，我们通常不必直接处理 File 对象，因为在某些情况下已经简化了该过程（但并非全部情况）。

还有其他提供文件的方式，以帮助解决不同的用例(如，从用户那里读取文件名，或者从文件对话框中提取路径等)，目前只看两个简单的。

通常，在从文本文件中读取内容时，我们希望能够逐行读取，或更多。

这给了我们两种主要的选项来从文件中读取文本：

1. 使用 `Scanner`，并给它一个 `File` 对象（与 System.in 相比）。
2. 使用 `BufferedReader`，并给它一个 `FileReader` 作为源。

## 使用 Scanner

例如我们有个文件叫做 `foo.txt`

```Java
Scanner fileScanner = new Scanner(new File("foo.txt."));
```

当然，还有一些细节可以改变 - File 对象可以来自其他地方，并且不需要在同一时间创建，文件名的文本可以包含目录信息，用于不在程序所在目录中的文件。

Scanner 和 File 的文档提供了有关这些组合的更多细节。

### 例子

```Java
import java.util.Scanner;
import java.io.File;
import java.io.FileNotFoundException;

public class ScannerExample {
    public static void main(String[] args) {

        try {
            // correct-start
            // 创建新读取
            Scanner fileScanner = new Scanner(new File("foo.txt"));

            while (fileScanner.hasNextLine()) {
                System.out.println(fileScanner.nextLine());
            }
            // 关闭读取
            fileScanner.close();
            // correct-end
        }
        catch (FileNotFoundException e) {
            System.err.println("The file doesn't exist.");
        }
    }
}

// This will be printed to the screen.
// Followed by this.
// And after a gap, this!

// 这也是foo.txt内的内容
```

## 使用 BufferedReader

使用 BufferedReader 读取。

```Java
BufferedReader br = new BufferedReader(new FileReader("fileName"));
```

再次强调，这不是唯一的方式，值得探索相关文档（BufferedReader、FileReader）。

这两种选项都有优缺点，主要特点是 Scanner 允许使用正则表达式进行处理（这实际上是 nextInt()方法和其他类似方法的基础），而 BufferedReader 缓冲输入以减少从外部来源（即磁盘上的文件）可能造成的昂贵读取次数。

无论选择哪种选项，在完成后都应该**关闭输入流**（这是我们一直忽略的，但对文件 I/O 来说非常重要）。最好将其放在 finally 块中以确保发生（至少我们可以尽力而为）。

:::tip 一些有用的方法

```java
// 返回文件的行数
br.lines().count()

// 是否准备好读取
br.ready()

// 读取一行
br.readLine()

// 循环，读取所有行
while (br.ready()) {
    System.out.println(br.readLine());
}
```

:::

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileNotFoundException;
import java.io.IOException;

public class BRExample {
    public static void main(String[] args) {

        try {
            // correct-start
            // 创建新读取
            BufferedReader br = new BufferedReader(new FileReader("foo.txt"));
            // 检查br.ready
            while (br.ready()) {
                System.out.println(br.readLine());
            }
            // 关闭读取
            br.close();
            // correct-end
        }
        catch (FileNotFoundException e) {
            System.err.println("The file doesn't exist.");
        }
        catch (IOException e) {
            System.err.println("Something went wrong on the read.");
        }
    }
}

// This will be printed to the screen.
// Followed by this.
// And after a gap, this!

// 这也是foo.txt内的内容
```

### Try-With-Resources 读取

Try-With-Resources 可以帮助我们**自动关闭输入流**，我们不需要再被烦恼。

```java
// 单独引入库
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BRExample {
    public static void main(String[] args) {

        try (BufferedReader br = new BufferedReader(new FileReader("foo.txt"))) {
            while (br.ready()) {
                System.out.println(br.readLine());
            }
        }
        catch (IOException e) {
            System.err.println("Something went wrong");
        }
    }
}
```

#### 读取多个文件

有个练习，读取多个 txt 文件(里面只有 string)并对比，我把代码贴在这里，刚好是做一个参考。

```java
// 引入整个io库
import java.io.*;
import java.util.ArrayList;

public class SameContent {

    public static boolean sameContent(String filename1, String filename2) {
        // highlight-start
        try (BufferedReader file1 = new BufferedReader(new FileReader(filename1));BufferedReader file2 = new BufferedReader(new FileReader(filename2))) {
        // highlight-end

            ArrayList<String> list1 = fileToList(file1);
            ArrayList<String> list2 = fileToList(file2);
            if(list1.size() != list2.size()){
                return false;
            }else{
                for(int i = 0; i <list1.size(); i++){
                    if(!list1.get(i).equals(list2.get(i))) {
                        return false;
                    }
                }
            }
            return true;
        }
        catch (IOException e) {
            System.err.println("Something went wrong");
            return false;
        }
    }
    public static ArrayList<String> fileToList(BufferedReader file){
        ArrayList<String> list = new ArrayList();
        try {
            while(file.ready()){
                list.add(file.readLine());
            }
        } catch(IOException e){
            System.err.println("Something went wrong");
        }
        return list;
    }

    public static void main(String[] args) {
        if (sameContent(args[0], args[1])) {
            System.out.println("The two files have the same content.");
        }
        else {
            System.out.println("The two files do not have the same content.");
        }
    }
}
```
