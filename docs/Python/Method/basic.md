---
sidebar_position: 1
---

# 函数

Python 的函数与 JS 的很像，起码都叫做 function

## 定义函数

语法与 JS 有些不同，前面也需要写点东西： def(define)

```python
def nameOfFunc(a,b):
  return #do something
```

## 参数类型

Python 的函数参数也可以定义类型，总体感觉有点像 TS

```python
def nameOfFunc(a:int,b:int) -> int:
  return a + b
```

## 参数位置

Python 的函数与 JS 和 TS 有点不同，可以改变 args 的位置，而不影响函数的调用。

```python
def msg(name, msg):
    print(name + ", you have a message: " + msg)

# correct next line
msg(msg="Hi!", name="Luke")
# 我们可以手动指定参数是哪个
```

## 抽象方法

Python 的抽象方法创建请参考[这篇笔记](../OOP/inheritance#abstract-抽象方法)
