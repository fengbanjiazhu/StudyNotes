---
sidebar_position: 2
---

# 继承 Inheritance

继承是 java 面向对象编程技术的一块基石，因为它允许创建分等级层次的类。

继承就是 child class 继承 parent class 的特征和行为，使得子类对象（实例）具有父类的实例 Field 和 Method，或子类从父类继承 Method，使得子类具有父类相同的行为

## Extends 继承

JAVA 使用 extend 继承(与 JS 一样)，使用 super()来调用父 Class 的构造函数。

与 JS 不同的是，不是调用 constructor() 而是创建一个新的(如下面的 public Child())

```java
class Parent {
  private String name;
  public Parent (String name) {
    this.name = name;
  }
}

class Child extends Parent {
  public Child () {
    super("Child name")
  }
}
```

## 为什么需要继承

最重要就是减少代码重复，类似于分类整理，将公共方法创建一遍，在各个地方调用。

假设之前为了动物园游戏创建了了一些 Bird 相关的类，現在想要扩充，让动物园拥有像是 Chicken、Chicken、Sparrow 等更多鸟的种类，那麼可以 Extend Bird Class，这样 Bird 中所使用的**功能**都可以留下來，並基於它擴充一些新的 Chicken、Sparrow 类，**不需要重写功能，也不需要重复代码**，通过「扩充」（extends）原先已定义好的 Class。

### 一个例子

```JAVA title="公共父类"
public class Animal {
    private String name;
    private int id;
    public Animal(String myName, int myId) {
        name = myName;
        id = myId;
    }
    public void eat(){
        System.out.println(name+"正在吃");
    }
    public void sleep(){
        System.out.println(name+"正在睡");
    }
    public void introduction() {
        System.out.println("大家好！我是"         + id + "号" + name + ".");
    }
}
```

这个 Animal 类就可以作为一个父类，然后企鹅类和老鼠类继承这个类之后，就具有父类当中的 Attribute 和 Method，子类就不会存在重复的代码，维护性也提高，代码也更加简洁，提高代码的复用性（复用性主要是可以多次使用，不用再多次写同样的代码） 继承之后的代码：

```java title="企鹅类"
public class Penguin extends Animal {
    public Penguin(String myName, int myId) {
        super(myName, myId);
    }
}
```

```java title="老鼠类"
public class Mouse extends Animal {
    public Mouse(String myName, int myId) {
        super(myName, myId);
    }
}
```

## 继承类型

:::warning
需要注意的是 Java **不支持多继承**，但**支持多重继承**。
:::

![继承类型](./images/java-extends-types.png)

## 继承特性

- 子类拥有父类非 private 的属性、方法。

- 子类可以拥有自己的属性和方法，即子类可以对父类进行扩展。

- 子类可以用自己的方式实现父类的方法。

- Java 的继承是单继承，但是可以多重继承，单继承就是一个子类只能继承一个父类，多重继承就是，例如 B 类继承 A 类，C 类继承 B 类，所以按照关系就是 B 类是 C 类的父类，A 类是 B 类的父类，这是 Java 继承区别于 C++ 继承的一个特性。

- 提高了类之间的耦合性（继承的缺点，耦合度高就会造成代码之间的联系越紧密，代码独立性越差）。

## 继承关键字

继承可以使用 extends 和 implements 这两个关键字来实现继承，而且所有的类都是继承于 java.lang.Object，当一个类没有继承的两个关键字，则默认继承 Object 祖先类。

### Extends

在 Java 中，类的继承是单一继承，也就是说，一个子类只能拥有一个父类，所以 extends 只能继承一个类。

```java
public class Animal {
    private String name;
    private int id;
    public Animal(String myName, int myId) {
        //初始化属性值
    }
    public void eat(){} //吃东西方法的具体实现
    public void sleep() {} //睡觉方法的具体实现
}
// highlight-next-line
public class Penguin  extends  Animal{

}
```

### Implements

使用 implements 关键字可以变相的使 java 具有多继承的特性，**使用范围为类继承接口的情况**，可以同时继承多个**接口**（接口跟接口之间采用逗号分隔）。

```java
public interface A {
    public void eat();
    public void sleep();
}

public interface B {
    public void show();
}
// highlight-next-line
public class C implements A,B {
}
```

### Super & This

super ：我们可以通过 super 关键字来实现对父类成员的访问，用来**引用当前对象的 parent class**。

this ：指向自己的引用。

```java
class Animal {
  void eat() {
    System.out.println("animal : eat");
  }
}

class Dog extends Animal {
  void eat() {
    System.out.println("dog : eat");
  }
  void eatTest() {
    System.out.println("------------------");
    this.eat();   // this 调用自己的方法
    super.eat();  // super 调用父类方法
  }
}

public class Test {
  public static void main(String[] args) {
    Animal a = new Animal();
    a.eat();
    Dog d = new Dog();
    d.eatTest();
  }
}

/*
result:

animal : eat
------------------
dog : eat
animal : eat

*/
```

### Final

final 可以用来修饰变量（包括类属性、对象属性、局部变量和形参）、方法（包括类方法和对象方法）和类。

final 含义为 "最终的"。

使用 final 关键字声明类，就是把类定义定义为最终类，**不能被继承，或者用于修饰方法，该方法不能被子类重写**。

```java title="final声明类"
final class 类名 {
  // Class Body
}
```

```java title="final声明方法"
修饰符(public/private/default/protected) final 返回值类型 方法名(){
  //Method Body
}
```

:::warning
final 定义的类，其中的属性、方法不是 final 的，如果需要方法也 final，需要加上 final 关键字。
:::

### Constructor

Child 是不继承 Parent 的构造器（构造方法或者构造函数）的，它只是调用（隐式或显式）。如果父类的构造器带有参数，则必须在子类的构造器中显式地通过 `super` 关键字调用父类的构造器并配以适当的参数列表。

```java title="Parent"
class SuperClass {
    private int n;

    SuperClass() {
        System.out.println("来自SuperClass()");
    }

    SuperClass(int n) {
        System.out.println("来自SuperClass(int n)，数字为：" + n);
        this.n = n;
    }
}
```

```java title="Child1 继承"
class SubClass extends SuperClass {
    private int n;

    SubClass() { // 自动调用父类的无参数构造器
        System.out.println("SubClass");
    }

    public SubClass(int n) {
        super(111);  // 调用父类中带有参数的构造器
        System.out.println("SubClass(int n):" + n);
        this.n = n;
    }
}
```

```java title="Child2 继承"
class SubClass2 extends SuperClass {
    private int n;

    SubClass2() {
        super(666);  // 调用父类中带有参数的构造器
        System.out.println("SubClass2");
    }

    public SubClass2(int n) { // 自动调用父类的无参数构造器
        System.out.println("SubClass2(int n):" + n);
        this.n = n;
    }
}
```

测试一下打印结果：

```java title="TestSuperSub"
public class TestSuperSub{
  public static void main (String args[]){
    System.out.println("------SubClass 类继承------");
    SubClass sc1 = new SubClass();
    SubClass sc2 = new SubClass(100);
    System.out.println("------SubClass2 类继承------");
    SubClass2 sc3 = new SubClass2();
    SubClass2 sc4 = new SubClass2(200);
  }
}

/*
------SubClass 类继承------
来自SuperClass()
SubClass
来自SuperClass(int n)，数字为：111
SubClass(int n):100
------SubClass2 类继承------
来自SuperClass(int n)，数字为：666
SubClass2
来自SuperClass()
SubClass2(int n):200
*/
```
