---
sidebar_position: 1
---

# If...elif

最常见的控制语句，Python 的 If elif 和 JS，Java 的语法不一样。

## 语法

- condition 不包裹在括号中；
- 需要使用 冒号`:` 衔接在条件后面；

```Python title="syntax"
if condition:
    ##
elif condition:
    ##
else:
    ##
```

:::danger
注意，Python 是 if...`elif`...else
:::

## 例子

```Python
print("Enter a number:")
x = int(input())

if x < 0:
    print("You entered a negative number.")
elif x > 0:
    print("You entered a positive number.")
else:
    print("You entered zero.")
```
