---
sidebar_position: 1
---

# String 类

String 类是 Java 中非常常用的类之一，它用于表示`字符串`。String 类提供了许多方法来操作字符串，比如获取字符串的长度、连接字符串、截取子字符串等等。

```JAVA
public class AboutString1 {
    //String 类
    public static void main(String[] args) {
        //字符串（类）对象的生成方法
        //1、new 实例化
        String str1 = new String("第一种生成方法");
        //2、直接赋初值（字符串常量）
        String str2 = "第二种生成方法";

        //String 类的 length() 方法可以得到字符串的长度；
        System.out.println(str1.length());
        //String 类提供非常多的方法，使得字符串操作更方便；
        System.out.println(str1.substring(3,5));
        //前面提到过“String + 数值”，会产生自动转换类型……
        System.out.println(str3 + 321);
    }
}
```

:::warning
与 JS 不同的是，String 不可以乘法运算（如 JS 中，“50”\*1 = 50），但是数字还是会因为拼接字符串而变成字符串
:::
