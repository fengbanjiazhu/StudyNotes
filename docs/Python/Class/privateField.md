---
sidebar_position: 3
---

# Class 安全 - 私有

在 Python 的 Class 中，普通的创建方式会有很大风险，我们可以来看一下下面的案例

## Python 风险

Python 代码中也有很多风险，Python 的类和对象属性基本上是作为字典实现的。

鉴于 Python 默认为公共访问权限，如果您知道名称，其他代码可以修改这些属性。我们来看一下：

```python
def three():
    return 3


def four():
    return 4


class m:
    val = 9

    def f():
        return 0

    @classmethod
    def f1(cls) -> int:
        return cls.val


print(m.f())
# 0
m.f = three
print(m.f())
# 3
m.f = four
print(m.f())
# 4

print(m.f1())
# 9
m.f1 = three
print(m.f1())
# 3

m.woo = "Woo"
print(m.woo)
# Woo
```

:::danger
我们可以看到，我们很随意的更改了 f()和 f1()的 return 值。

而且我们甚至给 class 中加入了一个新的属性 woo
:::

## 解决

Python 实际上提供了一种通过访问修饰符来阻止部分情况的方法，这些修饰符遵循与 Java 相同的公共、受保护和私有结构。

请注意，这并不会阻止某人在运行时向类中添加属性，只是可能**阻止修改现有属性**。

除非另有规定，数据属性是公共的。

要将数据属性设置为私有的，名称前面加上**两个下划线**：

### 私有属性

添加 `__` 让属性私有

```python
class Foo:
  # highlight-next-line
    __priv_data = "Secret"

# error next line
print(Foo.__priv_data)

# AttributeError: type object 'Foo' has no attribute '__priv_data'. Did you mean: '_Foo__priv_data'?
```

### 私有方法

与前面一样，方法前面添加 `__` 会让他变为私有方法

```python
class Foo:

    def __str():
        return "This is a Foo"

# error next line
print(Foo.__str())

# AttributeError: type object 'Foo' has no attribute '__str'. Did you mean: '__str__'?
```

### Dunder 方法不适用

这个私有方法在 dunder 方法上面并不适用。

```python
class Foo:

    def __str__():
        return "This is a Foo"

print(Foo.__str__())

# This is a Foo
```

### 保护属性

暂时不说，总之是添加一个下划线。
