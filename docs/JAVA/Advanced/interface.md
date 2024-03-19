---
sidebar_position: 6
---

# Interface 接口

:::danger
Java 中的 Interface 接口和 TS 的**完全不同**，要注意一下。
:::

Interface 在 Java 编程语言中是一个 Abstract 抽象类型，是**抽象方法的集合**，接口通常以 interface 来声明。

一个 Class 通过继承接口的方式，从而来继承接口的抽象方法。

:::info
换句话说，Interface 就是规定了应该有哪些 Method，而不是数据。
:::

## Interface 和 Class 区别

**接口并不是类**，编写接口的方式和类很相似，但是它们属于不同的概念。类描述对象的属性和方法。接口则包含类要实现的方法。

:::note 主要区别

- 顶部使用的是 **interface 关键字**，而不是 class。
- **不允许有数据**成员。
  - 严格来说，它们可以，但它们始终被视为公共的静态常量数据成员，因此更准确的说法是`接口可以包含常量，但不能包含其他数据成员`。
  - 实际上，将常量放在接口中通常是不被赞同的，因为这开始破坏接口的概念（并引入了多重继承的问题），所以除非有非常充分的理由，否则应该避免这样做。
- 方法**不需要具有方法体**（即它们不需要任何代码）。
  - 自 Java 8 以来，可以通过两种方式在接口中定义完全定义（非抽象）的方法:
  - 作为静态 static 方法。在这种情况下，该方法“属于”接口，并且必须使用接口名称来调用，而不是使用实现接口的类的名称。
  - 作为默认方法，实现类将使用该方法，除非显式覆盖该方法（并带有@Override 标签）。如果操作不正确，可能会引入多重继承问题（但编译器会阻止您这样做）。
- 接口**不能有构造函数**（因为它们实际上是纯抽象类）。

:::

除非实现接口的类是抽象类，否则该类要定义接口中的所有方法。

## 创建接口 interface

```java
<access modifier> interface <name> {
    <method signature>;
    ...
}
```

访问修饰符 access modifier 与我们已经看到的一样，但 Private Interface 的用途甚至比与我们已经看到的一样，但 Private Class 更少。 `<name>` 遵循与类相同的规则 - 以大写字母开头。

每个 `<method signature>` 与我们所见过的方法相同。关键区别在于，**没有方法体，直接跟分号**。

当然，接口可以有多个方法，确切的数量取决于接口的目的（即使是空接口也可能有用！）。

```java title="interface example"
public interface Graduate {
  // 注意，没有方法体
	public String degreeName();
	public int graduationYear();
}

public interface Employee {
	public String employer();
}
```

:::tip
例子中的 interface 说明，任何是 Polygon 的对象都有一个名为 area 的方法，该方法**不带参数**并返回一个 double 类型的值，但没有说明如何实现这一点。
:::

## 使用接口 implements

使用接口要用到 implements 关键字。由于接口不强制实现任何方法，一个类可以实现它需要的**任意多个接口**，而不像扩展类那样受限。

:::info
implements 永远在 extends 后面
:::

```java title="使用多个接口"
public class Academic implements Graduate, Employee {
	public Academic(){

	}
  // highlight-start
	@Override
	public String degreeName(){
		return "IT";
	}
	@Override
	public int graduationYear(){
		return 2026;
	}
	@Override
	public String employer(){
		return "test";
	}
  // highlight-end
  // 上面的三个方法必须有，因为这是接口限制的
}
```

### 接口的多态性

这也意味着我们可以将 Academic 视为一个 Graduate 或 Employee。为多态性提供了一种途径：

```java
Graduate test2 = new Academic();
Employee test3 = new Academic();
```

然后，这种多态性允许类似于继承的抽象化 - 如果我们只关心某物是一个 Graduate，我们只需要将其视为一个 Graduate。动态分派将为我们解决其余的问题。

### 默认实现

如果接口具有默认实现，则实现类不需要覆盖它，但是如果有两个实现的接口，则类需要覆盖该方法以消除混淆。在这种情况下，接口中的实现仍然可以使用，只需要明确选择，使用以下语法

```java
InterfaceName.super.methodName(<parameters>);
```

实质上类似于从另一个类调用静态方法，但 super 夹在中间。

## 接口继承 Inheritance Between Interfaces

接口之间同样可以使用 extends 关键字来继承

```java
public interface A extends B {
    public void methodA();
}

public interface B {
    public int methodB();
}
```

这下子通过 Interface A 创建的 Class 都会拥有 methodA 和 methodB 两个方法

这种继承层次结构是独立于主层次结构的 - 接口不继承 Object，但它们假设任何实现类都会继承 Object（因此，接口可以使用 toString()，因为它是保证存在的）。

## 知识融合

我们之前看到的一个集大成的例子是 `List<E>` 接口。

这是一个接口，它指定了一个类需要满足 Java 中列表的概念所需的行为（即具有预期行为的方法）。

`ArrayList<E>` 和 `LinkedList<E>` 都实现了 `List<E>`，因此它们在类型上都是 List。这是抽象的一个例子 - 我们只需要把这些东西当作列表来思考，不需要关心它们的实现（甚至不需要关心它们的基本类型），以及继承 - 两个列表类通过实现接口继承了什么是 List 的概念。

注意，这些东西并不是完全分开的。继承支持抽象，通常来说，抽象是面向对象编程（实际上是许多编程范式）的主要目标。一段代码对于不重要的细节关心越少越好（作为副作用，当它不起作用时，找出原因和位置比非模块化代码容易得多）。

后来，我们将介绍更多的面向对象的原则/指导方针，其中一个是“根据接口而不是实现编程”。这并不意味着在 Java 关键字中的接口，尽管这是该语言特性的主要目的，它的意思是在可能的情况下，代码应该期望和编程到类/库/等的抽象外部接口，而不是依赖于内部细节。内部细节是脆弱的，而接口不是。

因此，在面向对象编程中，特别是在 Java 中，常见的方法是将变量声明为它们可以是的最通用类型。这样做有几个好处：代码更容易适应实现的更改；代码更好地支持代码重用；读者对该代码所必需的内容有一个明确的想法。

### 实际使用

因此，当我们使用 List 时，我们通常可以限制自己只使用 List，这有利于代码的长期发展：

```java
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

public class ListPrinter {

    public <E> void printList(List<E> list) {
        System.out.print("[");
        for (int i = 0; i < list.size() - 1; ++i) {
            System.out.print(list.get(i) + ", ");
        }

        if (list.size() > 0) System.out.print(list.get(list.size()-1));

        System.out.print("]");
    }

    public static void main(String[] args) {

        List<String> list = new ArrayList<String>();
        list.add("One");
        list.add("Two");
        list.add("Three");

        ListPrinter lp = new ListPrinter();
        lp.printList(list);
    }
}
```

printList 方法不需要知道它接收到的是什么类型的列表（巧合的是，它是一个泛型方法的示例）。

我强烈建议将 ArrayList 更改为 LinkedList，观察整个程序似乎没有任何区别。

如果你感到大胆，可以将类型参数值 String 更改为其他值（并根据需要调整 add 语句），看看会发生什么。
