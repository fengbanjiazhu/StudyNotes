---
sidebar_position: 5
---

# POJO 与 Record

POJO 与 Record 都是用来保存数据的类。

## POJO

POJO 是 Plain Old Java Object，一个简单的 Java 类。

这个类没有实现/继承任何特殊的 java 接口或者类，不遵循任何主要 java 模型，约定或者框架的 java 对象。

一般只有实例 fields，主要用来在 Class 之间储存，传递 data，POJO 内部的方法一般很少。

很多数据库 framework 都使用了 POJO 来处理数据，文件等。

POJO 有时候会被称作实体(Entity)，因为他是**数据库的镜像实体**

另一个缩写是 DTO，Data Transfer Object。

:::info JavaBean

POJO 也可能会被叫做 bean，或者 JavaBean。

JavaBean 也是一个 POJO，不过会多一些额外的规则。
:::

### POJO Code

我们来看一个例子：

```java title="Student.java"
public class Student {
  private String id;
  private String name;
  private String dateOfBirth;
  private String classList;

  // 这里涉及到的两个知识点请看后面的注释
  @Override
  public String toString() {
      return "Student{" +
              "id='" + id + '\'' +
              ", name='" + name + '\'' +
              ", dateOfBirth='" + dateOfBirth + '\'' +
              ", classList='" + classList + '\'' +
              '}';
  }

  public Student(String id, String name, String dateOfBirth, String classList) {
      this.id = id;
      this.name = name;
      this.dateOfBirth = dateOfBirth;
      this.classList = classList;
  }

  ...
  // getters and setters
  ...
}
```

:::tip 讲解 1
@Override - 重写注解，指标注这个方法是重写了 super 上即成的某一个方法，如果 super 上没有这个方法，那就报错。
[详情可以参考这片笔记](../Advanced/annotaion#override-重写)

toString() - 这是 Java 自带的方法，通过代码-生成-toString 来自动生成，返回所选择 fields 的信息
:::

```java title="Main.java"
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            Student s = new Student("S92300" + i, switch (i) {
                case 1 -> "Mary";
                case 2 -> "Max";
                case 3 -> "Jeff";
                case 4 -> "Harry";
                case 5 -> "Lisa";
                default -> "Anonymous";
            }, "05/11/2000", "Java MasterClass");
            System.out.println(s);
        }
    }
}

// 无Override toString方法的打印结果：
// Student@28a418fc
// ...
// Student@2ff4acd0

// 有Override toString方法的打印结果：
// Student{id='S923001', name='Mary', dateOfBirth='05/11/2000', classList='Java MasterClass'}
// ...
// Student{id='S923005', name='Lisa', dateOfBirth='05/11/2000', classList='Java MasterClass'}
```

:::tip 打印结果讲解
为什么会出现这两个不同呢？

无 Override 的时候，我们打印调用的是默认的 toString 方法，Java Class 的实例，打印的时候会有一个默认的调用 toString 方法，只包含一些基本信息。(如 Student@28a418fc)

当我们自行复写了这个方法，这时候打印，调用的是我们自己的 toString 方法，包含了我们想要展示的信息。
:::

## Record 记录类

从上面的例子我们也看出来了，POJO 的作用很单一，代码也很简单，都是基础 Class 的代码。

这也导致了一旦创建好了，我们很少回去再修改，查看这些代码。

实际上现代已经有很多的工具，可以帮助我们在底层数据 underlying data/模型 domain model 更改的时候，来自动生成这些代码的。

而 `Record` 就是 JDK16 中引入的一个新类型。

Record 的目的就是代替样板代码 POJO，但是他的限制性更强。 比如不能更改数据，为了保护数据。

:::info Record
Record 记录类是一个特殊的类，追求的是内部数据**稳定与不变**。他只包括了最基本的方法，如构造函数，getter。

唯一的数据传入方式，就是创建 Record 的时候，传入参数。(对，不能使用 setter。)

**所以当你需要可以更改的数据，要回去使用 POJO。Record 好处在于开发者不需要编写或者生成 POJO 代码。**

**但是如果你想要读取大量数据，或者只是传递数据，那么使用 Record 会方便很多。**
:::

### 编写 Record

上面我们在 POJO 中，手动创建了一个保存数据的类，此时我们使用 Record 来复现一下。

```java title="JavaStudent.java"
// 注意 ↓ 这里是record
public record JavaStudent(String id, String name, String dateOfBirth, String classList) {
}
```

复现完毕。Booooom 🎉 要知道我们上一个 POJO 可是有 54 行代码，虽然都是生成的，但是也很冗余。我们打印一下看看：

```java title="Main.java"
public class Main {
  public static void main(String[] args) {
    for (int i = 1; i <= 5; i++) {
      // only change
      // highlight-next-line
      JavaStudent s = new JavaStudent("S92300" + i, switch (i) {
          case 1 -> "Mary";
          case 2 -> "Max";
          case 3 -> "Jeff";
          case 4 -> "Harry";
          case 5 -> "Lisa";
          default -> "Anonymous";
      }, "05/11/2000", "Java MasterClass");
      System.out.println(s);
    }
  }
}

// 结果：
// JavaStudent[id=S923001, name=Mary, dateOfBirth=05/11/2000, classList=Java MasterClass]
// ...
// JavaStudent[id=S923005, name=Lisa, dateOfBirth=05/11/2000, classList=Java MasterClass]
```

与之前不同的是，打印结果变成了 JavaStudent[]。( 之前是 Student{} )

### Record 背后隐性生成

看完例子，对于每一个参数(实际上这里它叫做 header components)， Java 在后台默认生成了：

- 声明了与参数`相同名称`，`相同类型`的 fields
- 该 field 声明为了 private 和 final
- field is sometimes referred to as a component filed

并且给 Record 生成了：

- 覆盖了 toString 方法，打印每一个属性
- 给每个组件生成了一个公共访问器(getters)
  - 与手动生成不同的是，这个方法并没有特殊前缀(如 get/is)。
  - 这个方法的 name 和 type 与参数相同。
  - 例子：想要读取 Record 中的 id，直接调用 id()

## 代码实例对比

```java title="Main.java"
public class Main {
  public static void main(String[] args) {
    JavaStudent s1 = new JavaStudent("S923001", "Jeff", "01/01/2000", "Java MasterClass");
    Student s2 = new Student("S923001", "Jeff", "01/01/2000", "Java MasterClass");
    System.out.println(s1);
    System.out.println(s2);

    // error next line
    s1.setName("Alex");  // 报错，不能set数据
    s2.setName("Alex");

    System.out.println(s1.name() + " is taking " + s1.classList());
    System.out.println(s2.getName() + " is taking " + s2.getClassList());
  }
}
// JavaStudent[id=S923001, name=Jeff, dateOfBirth=01/01/2000, classList=Java MasterClass]
// Student{id='S923001', name='Jeff', dateOfBirth='01/01/2000', classList='Java MasterClass'}

// Jeff is taking Java MasterClass
// Alex is taking Java MasterClass
```
