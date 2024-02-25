---
sidebar_position: 3
---

# For loop

Python 的 for loop 与 Java，JS 的 for-Each 类似。

```python
word = "Programming 1"
for letter in word:
    print(letter)
# 打印出每个字符/字母，包括空格

trinums = [1, 3, 6, 10, 15]
for n in trinums:
    print(str(n * n)) #Don't know what the point of this is
```

## range()

当循环范围是整数范围的时候，可以配合 range() 函数使用

:::tip 参数
range 接受最多三个参数：

- 使用 1 个参数时，从 0 开始到参数值，每次递增 1 。
- 使用 2 个参数时，从第 1 个开始到第 2 个(前结束)，每次递增 1 。
- 使用 3 个参数时，从第 1 个开始，到第 2 个，使用第 3 个作为递增/递减值。

起始点是包含的，但结束点是不包含的。
:::

```python
for number in range(1, 6):
    print(number)
#  打印1 到 5 的所有数字

print("Loop 1")
for i in range(3):
    print(i, end = " ")
# 0 1 2

print("Loop 2")
for i in range(3, 6):
    print(i, end = " ")
# 3 4 5

print("Loop 3")
for i in range(10, 0, -3):
    print(i, end = " ")
# 10 7 4 1

print("Loop 4")
for i in range(2,2):
    print(i, end = " ")
else:
    print("hi")
# "hi"
```

:::info
如果 range()两个参数一样，是不会触发任何循环的。如 range(2,2)，会直接跳转到 else 语句中
:::
