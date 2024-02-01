---
sidebar_position: 1
---

# Inheritance 继承

JS 继承与 JAVA 继承的原理是一样的，只是代码语法略微不同。

目前先放一个代码案例，后续补 JS 笔记的时候再回来做修改。

## 代码案例

```JS

class Polygon {
  constructor(height, width) {
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }
  sayName() {
    console.log("Hi, I am a ", this.name + ".");
  }
  get area() {
    return this.height * this.width;
  }
  set area(value) {
    this._area = value;
  }
}

class Square extends Polygon {
  constructor(length) {
    this.height; // ReferenceError，super 需要先被调用！

    // 这里，它调用父类的构造函数并传入 length
    // 作为 Polygon 的 height, width
    super(length, length);

    // 注意：在派生的类中，在你可以使用 'this' 之前，必须先调用 super()。
    // 现在可以使用 'this' 了，忽略 'this' 将导致引用错误（ReferenceError）
    this.name = "Square";
  }
}
```
