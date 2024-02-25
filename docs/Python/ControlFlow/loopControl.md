---
sidebar_position: 5
---

# 控制循环关键字

Python 也有 break 和 continue 关键字来控制循环。

## Break

break 也是一样，达成某条件终止循环。

```Python
for i in range(10):
    if (i > 7):
        break
    print(i)

# The loop will only print 0 to 7
```

## Continue

continue 关键字就是跳过当前循环的迭代，进入下一个循环

```Python
for i in range(15):
    if i % 3 != 0:
        continue
    print(i)

# 0 3 6 9 12
# 跳过了1，2，4...直到14
```

## else

Python 还可以在循环中加 else 字段，非常的实用。（如 for...else，while...else）

具体的作用是：当循环失败的时候，触发的函数。如果前面的语句使用了 break 字段，else 也会跳过不执行。

举一个例子：

```python
i = 0
while i < 5:
    print(str(i) + ": still in the loop.")
    i += 1
else:
    print("Finished the loop.")

```

当 i 小于 5 的时候，这里就会一直循环，结束后，就会打印"Finished the loop."

再比如下面这里的案例：

```python
for num in range(n+1):
    if(num == 0 or num == 1):
        continue

    # correct-start
    for j in range(2, num):
        if(num%j == 0):
            break
    else:
        numOfPrime += 1
    # correct-end
```

这里的代码则表示，循环 2-num 之间的数字，只要有一个 j 被 num 整除，那么就 break 跳过其他的代码

但是如果没有 break，那么 numOfPrime 就会增加 1
