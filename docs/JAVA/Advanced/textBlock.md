---
sidebar_position: 3
---

# Text Block 代码块

Java 经常需要使用字符串定义 JSON，SQL 和 HTML。

这类信息的输出如果不通过换行和缩进整理格式，是非常不易于阅读和理解的。

Java 15 中的新特性 `文本块 (Text Blocks)`让程序员从引号和特殊字符串的泥潭里面解脱出来。

是一个特殊的多行 String 格式，我们不再需要使用转义序列来了。[想要查看转义序列笔记，请参考这里](../Basic/escapeSequences)

## 什么是文本块

文本块（Text Blocks）是一种在 Java 中定义多行字符串的解决方案，旨在简化多行字符串的实现方式，并提高其可读性。

它们将多行字符串的创建和处理变得更加容易、直接和灵活。文本块采用 """ 分隔符，并保留所输入文本的格式，包括嵌入的空白符。

### 语法示例

:::note
使用一对"""包裹（注意：开始的"""需要换行，否则编译报错）
:::

```java
String s1 = """
        This is a simple
        text block demo.""";

System.out.println(s1);

// This is a simple
// text block demo.
```

### 直接输出""不需要转义

可以直接输出""不需要转义，可以拼接字符串

```java
String s2 = """
        {
          "name": 'Tom',
          "age": 16,
        }
        """;
System.out.println(s2);

// {
//   "name": 'Tom',
//   "age": 16,
// }
```

### 可以直接使用\n\t 等特殊字符

```java
String s3 = """
            <xml>
                <body>hello\nText\tBlock</body>
            </xml>
            """;
System.out.println(s3);

// <xml>
//     <body>hello
// Text	Block</body>
// </xml>
```
