---
sidebar_position: 2
---

# 数组

数组很重要！Java 的数组与 TS 的很像，都是需要使用类型来规定的。

(应该说 TS 是仿照 Java 做的类型，不过我先学的 TS，就这么做笔记吧)

## 声明数组变量

首先看一下语法

```java
dataType[] arrayVar;
```

## 创建数组

Java 可以使用 **new 操作符来创建数组**，也可以像 TS 那样直接创建。

:::info syntax

```java
dataType[] arrayRefVar = new dataType[arraySize];

dataType[] arrayRefVar = {value0, value1, ...};
```

:::

### new 操作符创建

由于 Java 吸引了许多 C 和 C++ 程序员（不论是自愿的还是非自愿的），你可以使用 C 风格的数组声明语法(new 创建)

```java
int[] values = new int[3];
String[] words = new String[2];
```

插播一下，数组循环可以回去看[这篇笔记](../../ControlFlow/forLoop#enhanced-for-循环-for-each)

#### 初始化

在 Java 中创建数组时，它会自动用默认值填充每个单元格。这个默认值取决于数组的底层类型。对于 int，它是 0，

因此声明一个整数数组将（除非你做了其他处理）给你一个全是 0 的数组。

原始数据类型具有相当明显的默认值，所以让我们看看对象类型会怎么样：

```java
public class ObjectArray {
	public static void main(String[] args) {
      String a[] = new String[3];
      int b[] = new int[3];
      boolean c[] = new boolean[3];

      System.out.println(a[1]);
      System.out.println(b[1]);
      System.out.println(c[1]);
	}
}

// a - null
// b - 0
// c - false
```

对于那些已经是 C/C++ 程序员（或其他一些语言）的人来说，所有对象变量都是引用，动态分配的，因此默认值是一个空指针。

### 直接创建数组

如果你确切地知道你的数组会是什么样子，你可以一次性指定数组。这仅适用于具有文字表示的数据类型 - 因此复杂的内容无法以此方式处理，但数字、字符串、布尔值等都可以正常工作。

```java
double[] myList = {1.9, 2.9, 3.4, 3.5};
int[] a = {1, 4, 7, 8, 2};
```

### Java 没有元组

也许你会想知道是否可能在单个数组中具有不同类型的数据。简而言之，不行，我们无法创建类似 {1, "Hi", 3.4} 的数组。

Java 的数组必须是单属性的，也没有元组。

想要实现类似的元组结构，Java 就需要创建一个类似的 Class 结构，并且通过设置 getter 和 setter 来达到模拟 tuple 的目的。

## 多维数组

Multi-dimensional Arrays，多维度数组。

多维数组可以看成是数组的数组，比如二维数组就是一个特殊的一维数组，其每一个元素都是一个一维数组，例如：

```java
int[][] matrix = new int[2][2];

matrix[0][0] = 1;
matrix[0][1] = 0;
matrix[1][0] = 0;
matrix[1][1] = 100;

System.out.println("无： " + matrix);
System.out.println("1个： " + matrix[1]);
System.out.println("2个： " + matrix[1][1]);

// 无： [[I@7a81197d
// 1个： [I@5ca881b5
// 2个： 100
```

## 数组的限制

数组也有很多的限制，如大小限制。到目前为止，我们一直在定义大小较小的数组，所以可能会有人问是否存在某种上限。实际上，这有两个答案。由于 Java 中数组的语义，存在一个理论上的上限。

### 索引上限

数组是由 **int 索引** 的，并且它们不能具有负索引，因此它可以包含的元素数量受到 int 能够表示的最大数值的限制。就是 `Integer.MAX_VALUE : 2147483647`

而且如果我们的索引使用 long，我们的数组甚至会得到报错：

```java
public class LongIndex {
	public static void main(String[] args) {
		Object[] foo = new Object[10];

		long i = 4;
    // error next line
		System.out.println(foo[i]);
	}
}
// error: incompatible types: possible lossy conversion from long to int
```

### 内存上限

数组的第二个限制是一个实际上的限制，它只是虚拟机可以分配的连续内存的数量：

```java
public class BigArray {
	public static void main(String[] args) {
    // error next line
		Object[] foo = new Object[Integer.MAX_VALUE];
	}
}
// java.lang.OutOfMemoryError: Requested array size exceeds VM limit
```

### 计算上限

Dr Luke 使用了代码来计算出 Array 的上限，他根据每台电脑/虚拟机不同，得到的结果是不同的，我把代码贴在这里，之后再做研究。

```java
public class BigArray {

    public static final int bigAvg(int a, int b) {
      long la = a;
      long lb = b;
      return (int)((la+lb)/2);
    }

    public static void main(String[] args) {
      int l = 0;
      int h = Integer.MAX_VALUE;


      while (l < h) {
          try {
            boolean[] foo = new boolean[bigAvg(l,h)];
            try {
              boolean[] bar = new boolean[bigAvg(l,h) + 1];
                l = bigAvg(l,h) + 2;
            }
            catch (OutOfMemoryError r) {
                System.out.println(bigAvg(l,h) + " is the maximum size.");
                return;
            }
          }
          catch (OutOfMemoryError e) {
            try {
                boolean[] baz = new boolean[bigAvg(l,h) - 1];
                System.out.println((bigAvg(l,h)-1) + " is the maximum size.");
                return;
            }
            catch (OutOfMemoryError r) {
                h = bigAvg(l,h) - 2;
            }
          }
        }
    }
}

// 67108862 is the maximum size.   --from Ed.
// 2013265920 is the maximum size. --from My Macbook
```
