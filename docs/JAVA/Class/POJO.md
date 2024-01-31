---
sidebar_position: 5
---

# POJO

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

## POJO Code

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
// Student@5305068a
// Student@1f32e575
// Student@279f2327
// Student@2ff4acd0

// 有Override toString方法的打印结果：
// Student{id='S923001', name='Mary', dateOfBirth='05/11/2000', classList='Java MasterClass'}
// Student{id='S923002', name='Max', dateOfBirth='05/11/2000', classList='Java MasterClass'}
// Student{id='S923003', name='Jeff', dateOfBirth='05/11/2000', classList='Java MasterClass'}
// Student{id='S923004', name='Harry', dateOfBirth='05/11/2000', classList='Java MasterClass'}
// Student{id='S923005', name='Lisa', dateOfBirth='05/11/2000', classList='Java MasterClass'}
```

:::tip 打印结果讲解
为什么会出现这两个不同呢？

无 Override 的时候，我们打印调用的是默认的 toString 方法，Java Class 的实例，打印的时候会有一个默认的调用 toString 方法，只包含一些基本信息。(如 Student@28a418fc)

当我们自行复写了这个方法，这时候打印，调用的是我们自己的 toString 方法，包含了我们想要展示的信息。
:::
