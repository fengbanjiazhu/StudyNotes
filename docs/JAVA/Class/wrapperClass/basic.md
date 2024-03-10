---
sidebar_position: 1
---

# 包装类基础

在 Java 中，类型参数只能由**类名/类型**替换。

这意味着不能使用原始类型，所以 Java 为每种原始类型提供了相应的类对应项，当使用时会自动转换为原始类型。

这就是包装类（因为它们在类中“包装”数据）。

它们的名称通常与原始类型相同，但首字母大写。唯一的例外是 int，它的包装类是 Integer，char 的包装类是 Character。

| type    | wrapperClass |
| ------- | ------------ |
| byte    | Byte         |
| short   | Short        |
| int     | Integer      |
| long    | Long         |
| double  | Double       |
| char    | Character    |
| boolean | Boolean      |
