---
sidebar_position: 2
---

# File 类

该类主要用于**文件和目录的创建、文件的查找和文件的删除等**。

[菜鸟文档一览](https://www.runoob.com/java/java-file.html)

File 对象代表磁盘中实际存在的文件和目录。通过以下构造方法创建一个 File 对象。

:::note
通过给定的`父抽象 路径名`和`子路径名 字符串`创建一个新的 File 实例。

```Java
File(File parent, String child);
```

:::

:::note
通过将`给定路径名字符串`转换成`抽象路径名`来创建一个新 File 实例。

```Java
File(String pathname);
```

:::

:::note
根据 `parent 路径名字符串`和 `child 路径名字符串`创建一个新 File 实例。

```Java
File(String parent, String child);
```

:::

:::note
通过将给定的 `file: URI` 转换成一个`抽象路径名`来创建一个新的 File 实例。

```Java
File(URI uri);
```

:::

```Java title="创建实例"
public static void main(String args[]) {
  String dirname = "/java";
  File f1 = new File(dirname);
}
```
