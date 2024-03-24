---
sidebar_position: 6
---

# 枚举 Enum

Python 也有枚举，介于 Java 的方法和旧的 C 风格枚举之间。

## 基础

在 Python 中创建枚举，需要从枚举库中导入 Enum 类，然后通过扩展 Enum 并列出一系列与值相关联的名称来创建你的枚举。

以下是一个直接从 Python 文档中借来的示例：

```Python
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

c = Color.RED
print(c)
# Color.RED
```

## 添加方法

Python 中的枚举也是 Class 实现的，所以我们也可以向其中添加方法

```Python
from enum import Enum

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

    def __str__(self):
        return "This is the color red."

    def __repr__(self):
        return self.__str__()

c = Color.RED
print(c)
# This is the color red.
```

然而有一点不同的是，这些值不完全是类的实例 - 它们只是一系列值，可以是任何东西。

尽管通常你只会看到从 1 到 n 的整数值，但并不是必须的

```Python
from enum import Enum

class Colour(Enum):
    #There's no rhyme or reason to these values
    RED = "red"
    GREEN = 2
    BLUE = 3.0

    def __str__(self):
        return "This is the colour red."

    def __repr__(self):
        return self.__str__()

c = Colour.RED
print(c)
```

```Python
from enum import Enum

class Colour(Enum):
    # We can really mess things up
    RED = 1
    GREEN = 1
    BLUE = 1

    def __str__(self):
        return "This is the colour red."

    def __repr__(self):
        return self.__str__()

# Now this doesn't work!
c = Colour.GREEN
print(c)
```

因此，在 Python 中，如果按预期使用枚举，它们能很好地工作，但它们没有 Java 枚举的任何保护或保证。
