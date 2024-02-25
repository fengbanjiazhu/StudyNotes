---
sidebar_position: 2
---

# List 方法

Python 的 List 也有方法来操作，与 JS 的感觉差不多。

## 添加

### append()

添加在末尾，类似 push

```python
l = []
l.append(1)
l.append(2.0)
l.append('tree')

print(l)
# [1, 2.0, 'tree']
```

### insert(position, param)

将数据插入某个位置(原来该位置的就挤到后面)，这个 Js 似乎没有对应的函数。

```python
l = ["Mad", "dangerous to know"]
l.insert(1, "bad")

print(l)
# ['Mad', 'bad', 'dangerous to know']
```

### l\[a:b] = m

`l[a:b] = m`是一个 list 插入(替换)方法，(有点类似 Js 的 array.splice，但是又不太一样。)

- a 为初始 index
- b 为结束的 index(不含)
- m 为新 List，覆盖/插入的新数据

```python title="插入"
l = [1, 2, 3]

# if
l[1:1] = ['a', 'b', 'c']
# [1, 'a', 'b', 'c', 2, 3]

# if
l[2:1] = ['a', 'b', 'c']
l[2:2] = ['a', 'b', 'c']
# [1, 2, 'a', 'b', 'c', 3]
# 这两个结果相同，也就是说 a >= b，那么就不会删除任何

# if
l[1:] = ['a', 'b', 'c']
# [1, 'a', 'b', 'c']
l[2:] = ['a', 'b', 'c']
# [1, 2, 'a', 'b', 'c']
# 不写b后面的就全删了

# replace
l = [1, 2, 3, 4, 5]
l[1:3] = ["wooooo"]
# [1, 'wooooo', 4, 5]
```

## 合并

### + 与 +=

通过+或者+=符号直接把两个 List 合并

```python title="+"
l1 = [1, 2, 3]
l2 = [4, 5, 6]

l3 = l1 + l2

print(l3)
# [1, 2, 3, 4, 5, 6]
```

```python title="+="
l3 = [1, 2, 3]
l3 += 4

print(l3)
# [1, 2, 3, 4]
```

### extend(list)

扩展原来的 list，将新的 list 加进去

```python
l3 = [1, 2, 3, 4, 5, 6]
l3.extend([7, 8, 9])

print(l3)
# [1, 2, 3, 4, 5, 6, 7, 8, 9]
```
