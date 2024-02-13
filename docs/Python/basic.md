---
sidebar_position: 2
---

# 基础语法

放一些 Python 的基础语法

## Key words 关键字

保留字即关键字，我们不能把它们用作任何标识符名称。

Python 的标准库提供了一个 keyword 模块，可以输出当前版本的所有关键字：

```python
import keyword;
print(keyword.kwlist)
```

给我们打印了一个数组：
['False', 'None', 'True', 'and', 'as', 'assert', 'async', 'await', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']

## 注释

Python 注释自己使用了，是一个单 `#` 井号，还是老规矩 - `command + /`

多行注释可以用多个 # 号，还有 ''' 和 """

```python
# 第1注释

'''
第2注释
'''

"""
第3注释
"""
```

## 多行语句

Python 通常是一行写完一条语句，但如果语句很长，我们可以使用反斜杠 \ 来实现多行语句。(说实话，有点难看)

```python
item_one = 1
item_two = 2
item_three = 3

total = item_one + \
        item_two + \
        item_three

print(total)
# 6
```
