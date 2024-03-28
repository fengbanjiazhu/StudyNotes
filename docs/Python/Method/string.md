---
sidebar_position: 5
---

# 字符串方法

Python 也有一些字符串方法，使用方式与 JS 类似。

创建字符串，在字符串上调用方法。

## 大小写

- lower()
- upper()

```python
str = "pYtHOnIsFuN"

print(str.lower())
print(str.upper())

# pythonisfun
# PYTHONISFUN
```

## len(String)

返回字符串的 length，与 Js 的不同，JS 是直接将字符串的 length 作为属性输出，如 Str.length

```python
len("String")
```

## 分割

字符串分割有不同的方法，首先从简单的说起

### String\[start:to]

在字符串后面用`[]`，里面是 index。比如从第二个字符开始到之后，就是`[1:]`

举几个例子更加直观。

```python
string = "123456789"
print(string[1:])
# 23456789
print(string[2:-2])
# 34567
```

### split()

分割字符串，和 JS 的类似。接受两个参数，第一个参数是分割符号，即以什么符号来分割。第二个参数是分割次数，比如最多分割 1 次。可以很好的去掉一些文件前缀

:::note 例子
举个例子，有一批文件名字是`[中文][01][XXXX]`，我们想要去掉这批名字的`[中文]`前缀，但是又不想去掉 `[01]`部分，只要 maxSplit 写 1，他只会去掉第一个`]`之前的

```python
String.split("]", 1)
```

:::
