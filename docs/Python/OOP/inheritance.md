---
sidebar_position: 2
---

# 继承

Python 作为一种支持面向对象编程的语言，采用了基于 Class 的系统，因此在继承方面与 Java 的方法非常相似。

Python 有一个通用的基础类，也称为 Object，所有类最终都从它继承而来

```Python
class EmptyClass:
    pass

print(dir(EmptyClass))

#['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__']
```

## 继承语法

Python 继承的语法略有不同，但非常简单明了

```Python
class baseClassName(parentClassName):
```

我们来看一个创建的例子

```Python
class Parent:
    def hi(self):
        print("Hi")

class Child(Parent):
    pass

obj = Child()
obj.hi()
# Hi
```

## 重写语法

而 Python 和 Java 一样，使用动态分派来确定要运行哪一个 - 即它使用属于对象的实际运行时类型的那个。

```Python
class Parent:
    def hi(self):
        print("Hi")

class Child(Parent):
    def hi(self):
        print("Why hello, good sir.")

obj = Child()
obj.hi()

# Why hello, good sir.
```

## super() 调用父级

Python 也有 `super()` 字段来调用父级的方法

```Python
class Parent:
  def hi(self):
    print("Hi")

class Child(Parent):
  def hi(self):
    # correct next line
    super().hi()
    print("How are you?")

obj = Child()
obj.hi()
# Hi
# How are you?
```

### super() 调用父级构造器

super 也可以调用父级的构造器。只需要调用 `super().__init__()` 即可

```Python
class Parent:
  # correct-start
  def __init__(self, num):
    self.num = num
  # correct-end


  def print_num(self):
    print(self.num)

class Child(Parent):
  def __init__(self):
    # correct next line
    super().__init__(42)

obj = Child()
obj.print_num()
# 42
```

## Abstract 抽象方法

Python 也可以创建类似 Java 中的抽象方法，必须通过抽象基类模块 `abc` 引入。

我们需要从 abc 中，导出 ABC 类和 `abstractmethod` 注解。

抽象类必须继承自 ABC，并且抽象方法需要`@abstractmethod` 注解。

```Python
from abc import ABC, abstractmethod
# correct next line
class AbstractParent(ABC):
  # highlight-next-line
    @abstractmethod
    def hi(self):
        pass

class ConcreteChild(AbstractParent):
    # pass
    def hi(self):
        print("Hi")

obj = ConcreteChild()
obj.hi()
# Hi
```
