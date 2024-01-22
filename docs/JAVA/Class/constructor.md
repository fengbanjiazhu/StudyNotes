---
sidebar_position: 4
---

# Constructor 构造函数

构造函数是一个特殊的代码块，当创建 Obj 实例的时候，会执行的方法，他拥有 name 和 params。

**构造函数的 name 与 Class 的 name 是一样的。**并且构造函数**不可以有任何返回值**，任何 type，甚至 void 都不可以。

创建构造函数时，应该使用一个恰当的修饰符，来控制创建新 Class 实例的权限。

```java title="Car.java"
public class Car {  // Class declaration

    public Car() { // Constructor declaration

    // code to be executed as object is created

    }
}
```

## 默认构造函数

当我们的 Class 没有声明构造函数时，则会暗中声明一个默认构造函数。

这个默认构造函数不会有 params，如果你手动创建了构建函数，则不会自动创建。

## 创建构造函数

来看一下自己创建的例子，加深理解(JS 中也使用过类似的构造函数)

```java title="Account.java"
public class Account {
    //highlight-start
    public Account() {
      // no args constructor
      System.out.println("Empty constructor called");
    }
    //highlight-end

    //highlight-start
    public Account(String number, double balance, String customerName, String email, String phone) {
      // constructor with args
      this.number = number;
      this.balance = balance;
      this.customerName = customerName;
      this.customerEmail = email;
      this.customerPhone = phone;
      showDetails();
    }
    //highlight-end

    private String number;
    private double balance;
    private String customerName;
    private String customerEmail;
    private String customerPhone;

    public void showDetails() {
      System.out.println(customerName + " has: $" + balance + " account balance, and the email is: " + customerEmail + " , and the phone is :" + customerPhone);
    }
}
```

```java title="TestClass.java"
Account jeffsAccount = new Account();
jeffsAccount.showDetails();
System.out.println("--------------");
Account jeffsSecondAccount = new Account("12345", 2000, "Jeffrey", "123@gmail.com", "123456789");


// result:
// Empty constructor called
// null has: $0.0 account balance, and the email is: null , and the phone is :null
// --------------
// Jeffrey has: $2000.0 account balance, and the email is: 123@gmail.com , and the phone is :123456789
```

:::tip
JAVA 学习中，让我加深了很多 TS 的理解，比如 Type。

刚刚的 JAVA Class Account 中，创建好的类型就是 Account 类型，TS 中使用 zod 也好，React 也好，使用的时候 type 声明也异曲同工。
:::

### 构造函数的 Overload

刚刚例子也注意到了，创建构造函数的时候，也可以使用 Overload 重载。

我们通过不同数量的 params，来使用了不同的构造函数来创建，并且调用了不同的函数。
