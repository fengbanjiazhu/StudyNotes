---
sidebar_position: 1
---

# JAVA 拷贝

所有的计算机编程语言底层逻辑都是类似的，JAVA 中与 JS 类似， Obj 也是使用 Ref 指向一个内存单元，所以拷贝也是需要注意的。

而且也存在深浅拷贝之分。

## 浅拷贝 Shadow Copy

被复制对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用仍然指向原来的对象。

换言之，浅复制仅仅复制所考虑的对象，而不复制它所引用的对象。

### clone()

clone 方法将对象复制了一份并返回给调用者。一般而言，clone() 方法满足：

- 对任何的对象 x，都有 x.clone() !=x
  //克隆对象与原对象不是同一个对象

- 对任何的对象 x，都有 x.clone().getClass()==x.getClass()
  //克隆对象与原对象的类型一样

- 如果对象 x 的 equals()方法定义恰当，那么 x.clone().equals(x)应该成立。

### Java 中对象的克隆

- 为了获取对象的一份拷贝，我们可以利用 Object 类的 clone()方法。

- 在派生类中覆盖基类的 clone()方法，并声明为 public。

- 在派生类的 clone()方法中，调用 super.clone()。

- 在派生类中实现 Cloneable 接口。

```Java title="Clone"
class Student implements Cloneable
{
    String name;
    int age;

    Student(String name,int age) {
        this.name = name;
        this.age = age;
    }

    public Object clone() {
        Object obj = null;
        try {
            obj = (Student) super.clone(); //Object 中的clone()识别出你要复制的是哪一个对象。
        } catch(CloneNotSupportedException e) {
             System.out.println(e.toString());
        }
        return obj;
    }
}
```

这种复制是一种浅复制。

必须将对象中其他涉及到的对象，也显示 clone 一遍。

这种方式比较麻烦，不是很建议使用。

## 深拷贝

被复制对象的所有变量都含有与原来的对象相同的值，除去那些引用其他对象的变量。

那些引用其他对象的变量将指向被复制过的新对象，而不再是原有的那些被引用的对象。

换言之，深复制把要复制的对象所引用的对象都复制了一遍。
