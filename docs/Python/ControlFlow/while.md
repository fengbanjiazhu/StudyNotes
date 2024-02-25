---
sidebar_position: 4
---

# while loop

Python 的 while 循环没有特别大的区别，非常传统

```python
i = 0
while i < 10:
    print(i)
    i += 1
```

## while else

是的没看错，Python 的 while 还可以加 else.

当 while 条件验证失败的时候，会调用 else 的函数

```python
i = 0
while i < 5:
    print(str(i) + ": still in the loop.")
    i += 1
else:
    print("Finished the loop.")

# 0: still in the loop.
# 1: still in the loop.
# 2: still in the loop.
# 3: still in the loop.
# 4: still in the loop.
# Finished the loop.

:::info
注意，break关键字会跳过else语句。
:::

while True:
    print("This will get printed once.")
    break
else:
    print("This won't get printed.")

print("This will get printed after the loop finishes.")
# This will get printed once.
# This will get printed after the loop finishes.
```
