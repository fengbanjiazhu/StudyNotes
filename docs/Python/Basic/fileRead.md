---
sidebar_position: 8
---

# 文件读写

Python 处理文件 I/O 的方式与 Java 略有不同，采用了更直接的访问模型。

在 Python 中，open 内置函数生成一个文件对象（技术上该类是\_io.TextIOWrapper，但现在这并不重要），该对象可以进行读写操作。

## open 使用

open 函数接收三个参数

```Python
file object = open(file_name [, access_modifier][, buffering])
```

- 第一个参数是一个 String，指定了文件名。
- 可选的第二个参数也是一个 String，表示对文件的访问类型。
  - 尽管这是可选的，但默认为读取，因此实际上是强制的，并且通常最好明确指定。
- 第三个参数是一个 int，其中 0 表示无缓冲，1 表示一行，大于 1 表示该大小的缓冲区（是的，它在结果上并不一致），负数表示应使用系统默认大小，无论该大小是多少。

访问修饰符字符串有许多可能性，但主要的有：

- 'r' - 读取，从文件开头开始。
- 'w' - 写入，如果文件不存在，则创建文件，并在存在时覆盖它。
- 'a' - 追加，如果文件不存在，则创建文件，并在存在时追加到末尾。

更多模式可以在[这里找到](https://docs.python.org/3/library/functions.html#open)。

## 读取

打开文件后，可以使用以下方法进行读取：

f.read()：一次性读取整个文件。
f.readLine()：读取单行。

使用完文件后，使用 `f.close()` 关闭文件。

### Example

```python
f = open('data.txt', 'r')

for line in f:
    print(line, end='')

# This
# file
# has
# 5
# lines.
# 和data.txt内容一样
```

## 写入

使用 `f.write(<something to write>)` 进行写入，其中 `<something to write>` 被替换为要写入的 String

使用完文件后，使用 `f.close()` 关闭文件。

Python 还支持使用 `with <closable> as <name>:` 结构**自动关闭文件**，其中 `<closable>` 是具有 close() 方法的任何类型，而 `<name>` 是在 with 内部给出的局部名称。

Python 中的文件也可以通过普通的 Python for 循环逐行迭代 - `for line in file:`

### Example

下面的代码会创建一个新的 output.txt 文件

```python
with open('output.txt', 'w') as f:
    f.write("This is a newly created file!")
```
