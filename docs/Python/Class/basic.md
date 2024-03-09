---
sidebar_position: 1
---

# 基础

Python 中也有 Class， OOP 编程必不可少的一环。

## 创建 Class

Python 的 Class 创建很简单，只需要声明一个 `class`关键字，并且加 `:`即可

```python
class Simple_Class:

    value = "A variable in the class, like a data member"

    def func():
        print("This is a function in the class!")

print("No longer in the class here, as the indenting changed back.")
Simple_Class.func()
```

## 构建函数 \_\_init\_\_

python 中也有构造函数，用于初始化数据

:::info 回顾
Java 的构造函数是:

```java
class Main {
  private int x;
  Main(int num) {
     x = num;
  }
}
```

JS 的构造函数是:

```JS
class Main {
  constructor() {
    this.name = 'Jeff';
  }
}
```

:::

而 Python 的构造函数是：

所有的类都有一个 init 方法，即使我们初始化的时候没有添加

```python
class Foo:

    def __init__(self, num:int):
        self.secret = num

    def secret_mult(self, num:int) ->int:
        return num * self.secret

    def get_number(self)  -> int:
        return  self.secret

    def set_number(self, num:int):
        self.secret = num

obj = Foo(3)
print(obj.secret)
print(obj.secret_mult(5))

# 3
# 15
```

在 Python 中，有很多类似的，使用下划线的方法，他们被称为 Dunder Method，具体可以查看[这篇笔记](./dunderMethod)。

## 创建实例

Python 创建实例不需要任何 new 关键字，简单到直接调用这个 Class 即可。

```python
class Foo:

    def bar(self):
        print("Printing from the object!")

# correct next line
obj = Foo()
obj.bar()
```

如上面的例子，一个 Foo 类的实例 obj 就创建好了

## 静态方法 Static Method

Static 静态方法声明方式与普通方法没区别。

调用的时候也是直接在 class 上调用：`<class name>.<method name>(<parameters>)`

::: info
我们也可以添加**可选注解 optionally annotation**：`@staticmethod`
:::

```python
class Foo:

    def bar():
        print("This is a static method.")

    @staticmethod
    def baz(param):
        print("This is a static method that takes a parameter: " + str(param))

Foo.bar()
Foo.baz("TEST")

# This is a static method.
# This is a static method that takes a parameter: TEST
```

## 类方法 Class Method

类方法与静态方法类似，不过他们有访问 Class 内数据的机制

类方法**必须**由 `@classmethod` 注解来声明，并且第一个参数为`cls`

```python
class Foo:

    baz = "'Class attribute'"

    @classmethod
    def bar(cls):
        print(f"This class has an attribute with value {cls.baz}.")

# 调用的时候一样
Foo.bar()
# 注意，调用类方法的时候不需要传入参数，他默认接受class为参数
# This class has an attribute with value 'Class attribute'.
```

## 实例方法 Instance Methods

终于到了实例方法了！实例方法不需要任何注解，但是一定需要 `self` 参数

self 参数就是指向了 obj 本身，类似 Java 和 JS 中的 this 关键字

```python
class Foo:
    # correct next line
    def bar(self):
        print("This is an instance method, it must be called from an object.")

# 实例方法则必须在实例上面调用了
obj = Foo()
obj.bar()
# Again note that there is no argument for the self parameter.
```
