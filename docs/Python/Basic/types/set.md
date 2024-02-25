---
sidebar_position: 5
---

# Set 集合

你可能对数学中集合的概念很熟悉 - 一个无序且不包含重复元素的集合。

Python 提供了一个内置数据结构，模拟了这种数学结构（在某种程度上）。(JS 也有一样的东西)

在 Python 中，集合是一种包含元素的结构，没有重复项，并且没有保证的顺序。

## 创建 Set

直接使用 {} 包裹即可

```python
names = {"Russell", "Peano", "Zermelo", "Fraenkel", "Whitehead"}

print(names)
```

## 创建空 Set

:::danger
注意：创建一个空集合必须用 set() 而不是 { }，因为 { } 是用来创建一个空字典。
:::

```python
empty = set()

print(empty)
print(type(empty))

# set()
# <class 'set'>
```

## 访问 set

实际上 set 并不能直接被访问，如果想要访问就将 set 转换成 list

## 添加元素

通过 add()函数来移除

```python

primes = {2, 3, 5, 7}
primes.add(9)

print(primes)
# {2, 3, 5, 7, 9}
```

## 移除元素

通过 remove()函数来移除

```python
primes = {2, 3, 5, 7, 8}
primes.remove(8)

print(primes)
# {2, 3, 5, 7}
```

## 判断元素是否在集合中存在

```python
x in set1
```

应用例子：

```python
primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29}

n = int(input("Enter a number: "))
if n in primes: # True if n is in the set primes, False if it's not
    print(n, "is a prime.")
else:
    print(n, "is not a prime.")

# Enter a number: 3
# 3 is a prime.
```

:::tip
请注意，对于 in 的首选否定形式不是 in，而是 not in，例如 n not in primes。

与 Node.Js，JS 中的优先错误返回是一样的，if (false) return;
:::

## 遍历 Set

for...in 遍历 set

```python
primes = {2, 3, 5, 7, 11, 13, 17, 19}

for p in primes:
print(p)
```

## Set 中的运算符

`<=` 是 subset operator 子集运算符（与集合一起使用时）
`<` 是 proper subset operator 真子集运算符

`>=` 是 superset operator 超集运算符
`>` 是 proper superset operator 真超集运算符
`|` 给出集合并 set union
`&` 给出集合交 set intersection

`-` 给出集合差 difference
`^` 给出集合的对称差 symmetric difference

```python
set1 = {1, 2, 3}
set2 = {1, 2}
set3 = {5, 6}

print("Is", set2, "a subset of", set1, ":", set2 <= set1)
# Is {1, 2} a subset of {1, 2, 3} : True
print("Is", set2, "a proper subset of", set1, ":", set2 < set1)
# Is {1, 2} a proper subset of {1, 2, 3} : True
print("Is", set1, "a proper subset of", set1, ":", set1 < set1)
# Is {1, 2, 3} a proper subset of {1, 2, 3} : False

print("Is", set1, "a superset of", set2, ":", set1 >= set2)
# Is {1, 2, 3} a superset of {1, 2} : True
print("Is", set1, "a proper superset of", set2, ":", set1 > set2)
# Is {1, 2, 3} a proper superset of {1, 2} : True
print("Is", set3, "a proper superset of", set3, ":",set3 > set3)
# Is {5, 6} a proper superset of {5, 6} : False

print(set1, "union", set3, "is", set1 | set3)
# {1, 2, 3} union {5, 6} is {1, 2, 3, 5, 6}
print(set1, "union", set2, "is", set1 | set2)
# {1, 2, 3} union {1, 2} is {1, 2, 3}

print(set1, "intersection", set2, "is", set1 & set2)
# {1, 2, 3} intersection {1, 2} is {1, 2}
print(set1, "minus", set2, "is", set1 - set2)
# {1, 2, 3} minus {1, 2} is {3}
print(set1, "symmetric minus", set3, "is", set1 ^ set3)
# {1, 2, 3} symmetric minus {5, 6} is {1, 2, 3, 5, 6}

```
