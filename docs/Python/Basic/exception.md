---
sidebar_position: 7
---

# 异常处理

Python 中的异常与 Java 的结构相对接近，这其实是因为构建面向对象语言的合理方式有限（至少在构建合理的编程语言方面，也没有太多其他方式）。

异常及其处理也不例外 🙄。

Python 异常在结构上（至少在外部上）与 Java 的异常具有相似性。Python 有一个称为 BaseException 的单个异常基类，所有异常都继承自它（至少在 Python 3.x 中是这样）。通常情况下，程序员不会直接与 BaseException 交互，而与 Java 的 Exception 更相称的是（方便的）也叫 Exception。

在定义自己的异常时，它们通常会继承自 Exception。

Python 中的异常通常更简单地提供类型来帮助指示问题的性质，而不是像 Java 中那样复杂的错误消息和堆栈跟踪，事实上，堆栈跟踪通常使用一个单独的库来处理：traceback。

Python 异常的构造函数可以接受任意数量的参数，这些参数可以用于携带信息。除非被程序员修改，否则**str**()方法将打印出传递给构造函数的参数，从而可以轻松地传递简单的消息。

## 语法

Python 中等价于 Java 的 throw 是 raise，它后面可以跟着一个构造函数调用，但也可以裸用来重新引发最后一个异常：

```Python
raise Exception("This will stop.")
```

## Try Except

处理异常也非常类似，相关的结构是 try-except（类比 Java 中的 try-catch）。

```Python
try:
    raise Exception()
except Exception:
    print("Caught an exception!")
```

正如之前提到的，通常在 Python 中，异常被用作简单的类型来确定出了什么问题以及应该采取什么措施，但是如果需要从异常中提取信息，可以使用关键字 as 给异常命名：

```Python
try:
    raise Exception("This one has a message")
except Exception as e:
    print("Caught a " + str(type(e)))
    print("It has the following information:")
    print(e)
```

### 多个 except 子句

正如现在可能会预料到的那样，try 子句可以有多个 except 子句，而引发的异常将触发第一个匹配的 except 子句，其中异常的类型是一个子类（包括它自己类作为 except 子句中指定的类型的一个微不足道的子类）。任何类型的异常都可以用一个裸的 except:捕获，但是当然我们不知道发生了什么错误。

```Python
class A(Exception):
    pass

class B(A):
    pass

class C(B):
    pass

for cls in [A, B, C, Exception]:
    try:
        raise cls("Same message")
    except C as c:
        print("Caught a C with message " + str(c))
    except B as b:
        print("Caught a B with message " + str(b))
    except A as a:
        print("Caught an A with message " + str(a))
    except:
        print("Something went wrong but it's not on the expected list!")
```

### else 子句

与 Python 中的其他结构一样，可以添加 else 子句，如果没有触发任何 except 子句，则执行该子句。

```Python
try:
    pass  # nothing to go wrong here
except:
    print("Caught something.")  # this won't run
else:
    print("Made it out with no errors!")
```

:::info
一个主要的区别，源自 Python 的简单设计理念，是 Python 中没有受检异常，因此你永远不需要在 Python 中处理异常。
:::
