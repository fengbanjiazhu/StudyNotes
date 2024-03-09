---
sidebar_position: 3
---

# 封装 Encapsulation

利用抽象数据类型将`数据`和`基于数据的操作`封装在一起，使其构成一个不可分割的独立实体。这为数据提供了上下文，并允许控制如何访问和操作该数据。

## 抽象 Abstraction

数据被保护在抽象数据类型的内部，尽可能地`隐藏内部的细节`，只`保留一些对外接口`使之与外部发生联系。

**用户无需知道对象内部的细节**，但可以通过对象对外提供的接口来访问该对象。(外部用户只需担心如何与抽象交互)

抽象某种程度上与封装是紧密相连的，所以也就放在一起。

:::note 也就是

- 将行为 Behavior 和属性 Attributes 绑定在单个 Object 上
- 另一种是隐藏字段 Field，以及一些方法 Method。(不对外开放)
  :::

## 封装优点

- 减少耦合: 可以独立地开发、测试、优化、使用、理解和修改
- 减轻维护的负担: 可以更容易被程序员理解，并且在调试的时候可以不影响其他模块有效地调节
- 性能: 可以通过剖析确定哪些模块影响了系统的性能提高软件的可重用性
- 降低构建大型系统的风险: 即使整个系统不可用，但是这些独立的模块却有可能是可用的

## 相关知识点

- [Class 中的 getter 与 setter](../Class/setterAndGetter)
- [Class 中的 私有字段](../Class/basic.md#字段-field)
- [Class 中的 修饰符](../Class/modifiers)
- [Class 中的构造函数](../Class/constructor)
- [Class 中的 POJO](../Class/POJO)

## 案例

以下 Person 类封装 name、gender、age 等属性，外界只能通过 get() 方法获取一个 Person 对象的 name 属性和 gender 属性，而无法获取 age 属性，但是 age 属性可以供 work() 方法使用。

注意到 gender 属性使用 int 数据类型进行存储，封装使得用户注意不到这种实现细节。并且在需要修改 gender 属性使用的数据类型时，也可以在不影响客户端代码的情况下进行。

```java
public class Person {

    private String name;
    private int gender;
    private int age;

    public String getName() {
        return name;
    }

    public String getGender() {
        return gender == 0 ? "male" : "female";
    }

    public void work() {
        if (18 <= age && age <= 50) {
            System.out.println(name + " is working very hard!");
        } else {
            System.out.println(name + " can't work any more!");
        }
    }
}
```
