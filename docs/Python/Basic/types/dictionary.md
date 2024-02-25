---
sidebar_position: 4
---

# Dictionary

字典 - 实际上就是 Object，键值对

## 读取

读取的方式与 JS 一样。

```python
a = {"x" : 1, "y" : 0.3, "z" : 10.6}

print(a)
print(a["x"])
# {'x': 1, 'y': 0.3, 'z': 10.6}
# 1
```

## 添加字段

给字典添加字段的方式与 Js 也一样(当然仅限于 `obj[key] = value` 这种方法，JS 的方法实在多)

```python title="Add"
a = {"x" : 1, "y" : 0.3, "z" : 10.6}
a["test"] = 12

print(a)
# {'x': 1, 'y': 0.3, 'z': 10.6, 'test': 12}
```

## 删除字段

给字典删除字段的方式和 JS 也类似，但是有点点语法区别

```python
a = {"a" : 1, "b" : 2, "c" : 3 }
del a["a"]

print(a)
# {'b': 2, 'c': 3 }
```

:::tip
JS 的 obj 语法为： `delete obj[key]`
:::

## 创建空字典

可以通过使用 dict() 函数来创建空字典

```python
empty = dict()

print(empty)
print(type(empty))
# {}
# <class 'dict'>
```

## 遍历 Iterating

在 Python 中，遍历字典（dict）稍微复杂一些，但关键是要记住每个条目都有两部分：

```python
dic = {"a" : 1, "b" : 2, "c" : 3 }

# 循环每个key
# correct next line
for k in dic:
    print(k)
# a
# b
# c

# 通过循环key获取value
for k in dic:
    print(dic[k])
# 1
# 2
# 3

# 直接循环返回value
# correct next line
for v in dic.values():
  # highlight-next-line
    print(v)
# 1
# 2
# 3

# 和 for k in dic 结果一样，多余了，但是展示一下
for k in dic.keys():
    print(k)
# a
# b
# c


# 将键值对以tuple的形式return
for x in dic.items():
    print(x)

# ('a', 1)
# ('b', 2)
# ('c', 3)
```
