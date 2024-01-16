---
sidebar_position: 8
---

# Modifiers 修饰符

Class 中含有修饰符，Java 语言提供了很多修饰符，主要分为以下两类：

- 访问修饰符
- 非访问修饰符

## 访问控制修饰符

Java 中，可以使用访问控制符来保护对类、变量、方法和构造方法的访问。Java 支持 4 种不同的访问权限。

| 修饰符       | 描述                                                                                |
| ------------ | ----------------------------------------------------------------------------------- |
| default/none | 在同一包内可见，不使用任何修饰符。使用对象：类、接口、变量、方法。                  |
| private      | 在同一类内可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）**               |
| public       | 对所有类可见。使用对象：类、接口、变量、方法                                        |
| protected    | 对同一包内的类和所有子类可见。使用对象：变量、方法。 **注意：不能修饰类（外部类）** |