---
sidebar_position: 1
---

# If...else

最常见的控制语句，Python 的 If elif 和 JS，Java 的语法不一样。

:::tips 主要区别

- condition 不包裹在括号中；
- 需要使用 冒号`:` 衔接在条件后面；
  :::

## If...else 语法

```Python title="syntax"
if condition:
    # code here
else:
    # code here
```

## If...elif 语法

:::danger 语法注意
注意，Python 是 if...`elif`...else
:::

```Python title="syntax"
if condition1:
    # code here
elif condition2:
    # code here
else:
    # code here
```

### 例子

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

## Nested if

Python 和其他语言一样，也可以嵌套语法。但是也能看出来，因为没有 code block，嵌套越多，越难阅读。

```Python
if condition1:
    # code here
    if condition:
      # code here
    else:
      # code here
elif condition2:
    # code here
else:
    # code here
```
