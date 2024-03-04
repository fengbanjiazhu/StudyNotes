---
sidebar_position: 2
---

# Dunder 方法

Python 有许多称为 Dunder 方法、魔术方法或特殊方法的方法。（Dunder methods, Magic methods or Special methods）

这些方法具有特殊的名称，用双下划线包围，与 Python 运行时的内置函数和操作相关。

我们先前已经见过一个例子，即构造函数(`__init__`)，具体可以[查看这篇笔记](./basic).

还有诸如`__str__`，类似于 Java 中的 toString()方法，当使用 str()函数时会调用该方法。

所有这些方法都有各自的行为，适合于特定的任务，因此没有通用的处理方法。

例如，`__init__` 方法除了 self 参数之外还可以接受更多参数，并且不返回任何内容，而`__str__`方法不接受任何参数（除了 self），但应返回一个字符串。

Dunder 方法是为类定义的类型定义自定义行为的标准方式，例如 `__add__` 允许使用+运算符与该类，`__lt__` 与 `<` 运算符相关等等。

目前尚不清楚是否有一个易于访问的所有魔术方法及其功能的列表，但一些方法在[这里](https://docs.python.org/3/library/collections.abc.html)和[这里](https://stackoverflow.com/questions/56238263/which-python-dunder-magic-methods-do-you-need-to-implement-to-correctly-proxy-an)列出。
