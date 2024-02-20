---
sidebar_position: 2
---

# Match (Switch)

Python 中的 switch 语句不叫 switch，而是叫做 match 语句

## 语法

根据不同的情况调用代码，似乎不需要写 break 来打断？

也是后面跟着 colon

```Python
match <subject>:
    case <pattern 1>:
            <action 1>
    case <pattern 2>:
        <action 2>
        ...
    case <pattern n>:
        <action n>
    case _:
        <default action>
```

### 例子

```Python
match x:
    case 1:
        # do one thing
    case 5:
        # do one thing
    case 87:
        # do one thing
    case 120:
        # do one thing
    case _:
        # do another
```

## 进阶

当然，与 Switch 语句一样，match 也可以合并不同的情况

```Python
match x:
    case 1 | 5 | 87 | 120:
        # do one thing
    case _:
        # do another
```
