---
sidebar_position: 2
---

# Modifiers 修饰符

如何判断 Class 是一个 top-level Class？

- 在 source code file 声明
- 没有封装在任何其他 Class，Type 或者 Methods 中。

top-level Class 只有 2 个修饰符：public，none。

| Access Keyword | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| public         | public 指所有其他 class(任何包裹) 都有权限访问这个类                   |
|                | 当不声明修饰符的时候为 package access，只有同 package 才有权限访问该类 |
