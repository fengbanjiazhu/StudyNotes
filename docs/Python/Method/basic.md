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
