---
sidebar_position: 9
---

# 抽象类 abstract

Java 中，还可以创建一种**未完成的 Class**，尤其子类来完成。

这允许**提取常见但不完整的功能**，以最大化代码重用并支持多态性。

这是通过使用 `abstract` 关键字实现的。

抽象类必须在其签名中声明为抽象类，这允许声明抽象方法 - 这些方法强制子类具有该方法并提供实现。

（基本上就像是说“所有这种类型的类都必须能够做到这一点，但它们每个都必须用自己的方式来做”）

抽象类仍然可以有构造函数，但它本身**不能被实例化**，只能由它的子类（不是抽象的）来实例化。

:::note
一个具体的例子(应该，我猜的)就是 List 类。
我们发现所有的 ArrayList, LinkedList 都可以声明为 List 类，但是我们并不可以 new List。

```java
import java.util.ArrayList;
import java.util.List;
...
// working:
// correct next line
List<Integer> list1 = new ArrayList<>();

// won't work:
// error next line
List<Integer> list2 = new List<>();

```

:::

## 创建抽象类

在 Java 语言中使用 `abstract class` 来定义抽象类。

抽象类除了不能实例化对象之外，类的其它功能依然存在，成员变量、成员方法和构造方法的访问方式和普通类一样。

### 抽象类可以有构造函数

抽象类不是必须拥有构造函数。抽象类可以有构造函数，但并不要求。

```java title="抽象类仍然可以有构造函数"
public abstract class Employee{
  private String name;

  public Employee(String name){
    this.name = name;
  }
}
```

### 抽象类不可以实体化

由于抽象类不能实例化对象，所以抽象类必须被继承，才能被使用。也是因为这个原因，通常在设计阶段决定要不要设计抽象类。

```java title="不可实体化"
// error next line
Employee test = new Employee("Jeff");
```

这里就会报错，抽象类是不可以实例化的。

## 抽象方法

抽象方法的创建也很简单，也需要用到 `abstract` 关键字。 **抽象方法没有方法体**

抽象方法只保留方法的功能,而具体的执行,交给子类重写抽象方法.

:::tip
抽象方法所在的类，一定是抽象类。 如果抽象方法创建在非抽象类中，则会报错。
:::

```java title="Employee.java"
public abstract class Employee{
  private String name;

  public Employee(String name){
    this.name = name;
  }

  // 注意这里没有方法体
  // highlight-next-line
  public abstract void work();

  // 正常方法
  public String getName(){
      return name;
  }
}
```

### 抽象方法重写

当父类创建了抽象方法，子类继承的时候，几乎是强制性的要求重写该方法。

```java title="EmployeeProgrammer.java"
public class EmployeeProgrammer extends Employee{
  private String skill;
  public EmployeeProgrammer(String name, String skillSet){
    super(name);
    this.skill = skillSet;
  }
  // 抽象方法重写后才能使用
  void work(){
    System.out.println("Coding");
  };
}

```

### 实例化子类

尽管我们不能实例化一个 Employee 类的对象，但是如果我们实例化一个 EmployeeProgrammer 类对象，该对象将从 Employee 类继承方法，且通过该方法可以设置或获取三个成员变量。

```java title="Test.java"
...
// 以下都可以执行
// correct-start
Employee newProgrammer = EmployeeProgrammer("Jeff","Java/TS/Python/PHP");
newProgrammer.work();
newProgrammer.getName();
// correct-end
```
