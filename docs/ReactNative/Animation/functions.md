---
sidebar_position: 3
---

# 动画函数

Animated 提供了三种动画类型。每种动画类型都提供了特定的函数曲线，用于控制动画值从初始值变化到最终值的变化过程：

:::note 三种动画类型

- `Animated.decay()` 以指定的初始速度开始变化，然后变化速度越来越慢直至停下。
- `Animated.spring()` 提供了一个基础的弹簧物理模型.
- `Animated.timing()` 使用 easing 函数让数值随时间动起来。
  :::

大多数情况下你应该使用 `timing()`。默认情况下，它使用对称的 easeInOut 曲线，将对象逐渐加速到全速，然后通过逐渐减速停止结束。

## Timing() 时间动画函数

最常用的动画函数。
使用 easing 函数让数值随时间动起来

### 4 种内置动画

Easing 模块通过以下几个方法提供了几种预置的动画。

#### back 

:::note
back 提供了一个简单的动画，物体在向前移动之前稍微往后退。

```js
Easing.back(回拉幅度);
```

:::

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 50,
      duration: 1000,
      // correct next line
      easing: Easing.back(20),
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### bounce

bounce  提供了一个弹跳的动画效果

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 50,
      duration: 1000,
      // correct next line
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### ease 

ease  提供了一个简单的惯性动画效果

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 50,
      duration: 1000,
      // correct next line
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### elastic

:::note
elastic  提供了一个简单的弹簧交互效果。

```js
Easing.elastic(弹跳次数);
```

:::

```js title="Elastic"
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 50,
      duration: 1000,
      // correct next line
      easing: Easing.elastic(4),
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

### 3 种标准函数

#### linear

一次方函数 - 斜线 - 线性匀速运动

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 50,
      duration: 1000,
      // correct next line
      easing: Easing.liner,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### quad

二次方函数 - 抛物线 - 逐渐加速

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 50,
      duration: 1000,
      // correct next line
      easing: Easing.quad,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### cubic

三次方函数 - 更陡的抛物线 - 剧烈加速

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 50,
      duration: 1000,
      // correct next line
      easing: Easing.cubic,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

### 4 种补充函数

#### bezier 

bezier  提供了一个三次贝塞尔曲线，可以自定义速度。可以在[这个网站](https://cubic-bezier.com/#.17,.67,.83,.67)实验。

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 300,
      duration: 1000,
      // correct next line
      easing: Easing.bezier(0.8, 0.7, 0.9, 0.25),
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### circle 

提供了一个圆形函数

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 300,
      duration: 1000,
      // correct next line
      easing: Easing.circle,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### sin 

提供了一个正弦函数

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 300,
      duration: 1000,
      // correct next line
      easing: Easing.sin,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

#### exp 

提供了一个指数函数，前面很慢后面很快

```js
import { Animated, Easing } from 'react-native';
...

<Button
  title="Click!"
  onPress={() => {
    Animated.timing(marginLeft, {
      toValue: 300,
      duration: 1000,
      // correct next line
      easing: Easing.exp,
      useNativeDriver: false,
    }).start();
  }}
/>
...
```

### 自由组合动画函数

以上的动画都可以自由组合，想要查看组合后的效果，可以参考[这个网站](https://easings.net/)。

```js
// 一边加速一边弹跳
easing: Easing.in(Easing.bounce)
...
easing: Easing.out(Easing.exp)
// 先加速，再减速，再弹跳
easing: Easing.inOut(Easing.elastic(1))
```

## Decay() 衰减动画函数

以指定的初始速度开始变化，然后变化速度越来越慢直至停下。

[官方文档](https://reactnative.cn/docs/animated#decay)

```js
static decay(value, config): CompositeAnimation;
```

:::note Config 参数有以下这些属性

- velocity: 初始速度。必需。
- deceleration: 衰减系数。默认值 0.997。
- isInteraction: 指定本动画是否在 InteractionManager 的队列中注册以影响其任务调度。默认值为 true。
- useNativeDriver: 启用原生动画驱动。默认不启用(false)。
  :::

```js
Animated.decay(marginLeft, {
  // correct-start
  velocity: 1,
  deceleration: 0.996,
  // correct-end
  useNativeDriver: false,
}).start();
```

:::note
没有指定结束的值，结束时机是根据`初始速度`与`衰减系数`决定的。

**衰减系数越小，动画结束的越快**
:::

## Spring() 弹簧动画函数

提供了一个基础的弹簧物理模型， 也有一个 toValue，但是其他配置不同。

根据基于阻尼谐振动 damped harmonic oscillation 的弹性模型生成一个动画值。它会在 toValue 值更新的同时跟踪当前的速度状态，以确保动画连贯。可以链式调用。

[官方文档](https://reactnative.cn/docs/animated#spring)

```js
static spring(value, config): CompositeAnimation;
```

:::warning
spring 有 `bounciness/speed`，`tension/friction` 或 `stiffness/damping/mass` 这三组数据，他们**不能同时定义**，**只能指定其中一组**。
:::

:::note tension/friction
friction: 控制弹性/幅度（摩擦）。默认值 7。**越小越弹**。（没有摩擦的时候弹的停不住）

tension: 控制速度（张力）。默认值 40。**越大越快**。
:::

:::note bounciness/speed
speed: 控制动画速度。默认值 12。**越大越快**。

bounciness: 控制弹性。默认值 8。 **越大越弹**。
:::

:::note stiffness/damping/mass
stiffness: 弹簧刚度系数。默认值 100。**越大越弹**。

damping: 定义了弹簧运动由于摩擦力而应受到的阻尼。 默认值 10。**越小越弹**。

mass: 弹簧末端附着物体的质量。默认值 1。**越大越难停下，越小越容易停下**。
:::

```js
Animated.spring(marginLeft, {
  toValue: 1.5,
  // correct-start
  speed: 13,
  bounciness: 10,
  // correct-end
  useNativeDriver: false,
}).start();
```

## Parallel() 并发动画函数

```js
Animated.parallel([动画1, 动画2]).start();
```

同时启动 N 个动画函数，例如一边右移，一边变大。

## Sequence() 序列动画函数

```js
Animated.sequence([动画1, 动画2]).start();
```

按顺序执行动画。

## Stagger() 有序/交错动画函数

```js
Animated.stagger(间隔, [动画1, 动画2]).start();
```

按顺序执行，但是执行之间有 N 毫秒的间隔。

## Delay() 延迟动画函数

可以夹杂在动画之间，延迟 N 毫秒

```js
Animated.sequence([动画1, Animated.delay(延迟时间), 动画2]).start();
```

## Event() 动画事件

是一个用于创建动画事件处理程序的特殊组件，接受一个映射的数组，对应的解开每个值，然后调用所有对应的输出的 `setValue` 方法。

它通常与 `Animated.Value` 和 `Animated.View` 等动画相关的组件一起使用，用于将动画值（例如，滚动位置、手势操作等）与动画效果进行关联。

:::note 参数属性
listener: 可选的异步监听函数

useNativeDriver: 启用原生动画驱动。默认不启用(false)。
:::

```js
onScroll={Animated.event(
   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
   {listener: (event) => console.log(event)}, // 可选的异步监听函数
 )}
```
