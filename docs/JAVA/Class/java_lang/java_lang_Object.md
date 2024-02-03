---
sidebar_position: 4
---

# Object 类

Object 类是所有类的父类，所有对象（包括数组）都实现这个类的方法。

Object 类位于 java.lang 包中，编译时会自动导入，我们创建一个类时，如果没有明确继承一个父类，那么它就会自动继承 Object，成为 Object 的子类。

所以在默认的情况下，我们定义的类扩展自 Object 类，那我们当然可以调用和重写 Object 类里的所有方法了。

我们看一下 Object 类里都定义了哪些方法。

## 方法

| 返回值           | 方法                          | 描述                                                                                                                                                 |
| ---------------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| protected Object | clone()                       | 创建并返回一个对象的拷贝                                                                                                                             |
| boolean          | equals(Object obj)            | 比较两个对象是否相等                                                                                                                                 |
| protected void   | finalize()                    | 当 GC (垃圾回收器)确定不存在对该对象的有更多引用时，由对象的垃圾回收器调用此方法。                                                                   |
| Class            | getClass()                    | 获取对象的运行时对象的类                                                                                                                             |
| int              | hashCode()                    | 获取对象的 hash 值                                                                                                                                   |
| void             | notify()                      | 唤醒在该对象上等待的某个线程                                                                                                                         |
| void             | notifyAll()                   | 唤醒在该对象上等待的所有线程                                                                                                                         |
| String           | toString()                    | 返回对象的字符串表示形式                                                                                                                             |
| void             | wait()                        | 让当前线程进入等待状态。直到其他线程调用此对象的 notify() 方法或 notifyAll() 方法。                                                                  |
| void             | wait(long timeout)            | 让当前线程处于等待(阻塞)状态，直到其他线程调用此对象的 notify() 方法或 notifyAll() 方法，或者超过参数设置的 timeout 超时时间。                       |
| void             | wait(long timeout, int nanos) | 与 wait(long timeout) 方法类似，多了一个 nanos 参数，这个参数表示额外时间（以纳秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 纳秒。。 |
