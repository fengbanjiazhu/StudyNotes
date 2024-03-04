---
sidebar_position: 6
---

# 以类为类型

Class as types，有点像是 TS 中的 Type。Java 是一个强类型的语言，因为每个变量都需要标注类型。

当我们初始化一个 class 的实例的时候，我们就需要将该实例标注为这个 Class 类型。

来看一个简单的例子

```java
BankAccount[] accounts = new BankAccount[numberOfAccounts];
```

这里是一个简单的例子，当我们使用 new 字段创建 BankAccount 的时候，这个变量就是一个 BankAccount[]类型。

这样无论是编译器还是运行时，当有人尝试向帐户中添加不属于 BankAccount 类型的内容时，都会自动抛出错误。
