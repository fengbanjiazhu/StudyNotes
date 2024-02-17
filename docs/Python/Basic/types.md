---
sidebar_position: 3
---

# 变量类型

变量类型的概念不需要做多赘述了。

## 变量赋值

Python 中的变量赋值不需要类型声明。

等号 = 运算符左边是一个变量名，等号 = 运算符右边是存储在变量中的值。

```python
counter = 100 # 赋值整型变量
miles = 1000.0 # 浮点型
name = "John" # 字符串
```

### 多个变量赋值

Python 允许同时为多个变量赋值，既可以同时赋相同的值，也可以不同。

```python
a = b = c = 1

a, b, c = 1, 2, "john"
```

## 标准数据类型

- Number（数字，包括 Integer，Float）
- String（字符串）
- bool（布尔类型）
- List（列表-实际上就是 Array）
- Tuple（元组）
- Set（集合）
- Dictionary（字典-实际上就是 Object）

### String

字符串目前没有看到与 JS 差别太大的地方，列举一些常用方法

#### len(String)

返回字符串的 length，与 Js 的不同，JS 是直接将字符串的 length 作为属性输出，如 Str.length

```python
len("String")
```

### Number

数字也没有看到太大的差别，Python 的大数字列举方式与 Java 类似，都是可以自动规避下划线。如 123_456_789 的数字打印出来不会存在下划线。

Float 也没有太大区别

### Boolean

布尔值使用方式也没有区别。

:::info 布尔值
要注意的是在 Python 中，布尔值需要首字母大写。

```python
flag = True
isLogin = False
```

:::
