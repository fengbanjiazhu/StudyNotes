---
sidebar_position: 3
---

# 变量类型

变量类型的概念不需要做多赘述了，注意的是**python 中没有布尔值**

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

Python 有五个标准的数据类型：

- Numbers（数字）
- String（字符串）
- List（列表-实际上就是 Array）
- Tuple（元组）
- Dictionary（字典-实际上就是 Object）
