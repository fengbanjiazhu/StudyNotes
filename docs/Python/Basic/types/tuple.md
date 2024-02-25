---
sidebar_position: 6
---

# Tuple

元组！老朋友了(谢谢 TS)

元组也就是 JS 的 Array，TS 的 tuple。python 一个有各种类型的 List。

但 Python 的元组一旦创建，你就不能改变它。你可以使用方括号按索引访问元组的元素，但你**不能更改**元素，也不能添加或删除元素。

## 创建元组

```python
t = (1, 'a', 5.4)

print(t)
```

## 创建空元组

有两种方式创建空元组

```python
empty = tuple()
print(empty)

empty2 = ()
print (empty2)

# ()
# ()
```

## 创建只有一个元素的元组

这个有点 tricky。当你想要创建一个只有一个元素的元组时，不能直接使用(元素)创建，而是需要加 comma

```python
# error next line
not_a_tuple = (1)

print(not_a_tuple)
print(type(not_a_tuple))
# 1
# <class 'int'> - 只是个数字

# correct next line
singleton = (1,)

print(singleton)
print(type(singleton))
# (1,)
# <class 'tuple'>
```

## 访问元组

与 List 类似，直接传入 index 即可

```python
primes = (2, 3, 5, 7, 11)

print("The first prime is", primes[0])

for i in range(len(primes)):
    print(primes[i])

# The first prime is 2
# 2
# 3
# 5
# 7
# 11
```

## 遍历元组

与其他遍历方式一样

```python
primes = (2, 3, 5, 7, 11)

for p in primes:
    print(p)
```
