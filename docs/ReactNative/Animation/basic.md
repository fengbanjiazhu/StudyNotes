---
sidebar_position: 1
---

# 动画基础

React Native 想要配置动画类效果，如布局改变，CSS 特效等，并非直接加 CSS 就可以，需要 Animated 的支持，配置一些 Animation 相关的库与设置才可以使用。[查看官方 Animated 文档](https://reactnative.cn/docs/animated)

## 动画创建

创建动画最基本的工作流程是先创建一个 `Animated.Value` ，将它连接到动画组件的一个或多个样式属性，然后使用 `Animated.timing()` 通过动画效果展示数据的变化。

:::warning
请不要直接修改动画值！你可以用 useRef Hook 来返回一个可修改的 ref 引用。ref 对象的 current 属性在初始化时被赋予给定的动画值，且在组件的生命周期内保存不被销毁。
:::

示例：

```js title="Animated.jsx"
import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  // correct next line
  const marginLeft = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <Button
        title="Click!"
        onPress={() => {
          // correct-start
          Animated.timing(marginLeft, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: false,
          }).start();
          // correct-end
        }}
      />
      // correct next line
      <Animated.View style={[styles.container, { translateX: marginLeft }]}></Animated.View>
    </View>
  );
};
```

:::note 也就是分三步创建

- 使用 useRef 创建 new Animated.Value()，并获取 current 值。
- 当触发函数时，使用 Animated.timing 函数，调用 .start()更改该 Value
- 将该 Value 绑定在元素的 style 中
  :::

```js title="Animated.timing()"
Animated.timing("需要改变的变量", {
  toValue: 200,
  duration: 1000,
  useNativeDriver: false,
}).start();
```

这里可以传入配置，我们需要将值变为多少，duration 为多少毫秒，是否需要原生驱动。

### 支持属性

marginLeft，marginRight，marginTop，marginBottom，
translateX， translateY，
Left， right， top， bottom

## 支持动画组件

看过刚刚的例子也注意到了，这里有一个 `<Animated.View />` 组件。

必须将动画效果放入支持动画的组件中，动画效果才能正常的播放。

:::note
使用 `createAnimatedComponent()` 方法来处理组件，使其可以用于动画。
:::
Animated 中默认导出了以下这些可以直接使用的动画组件，当然它们都是通过使用上面这个方法进行了封装：

- Animated.Image
- Animated.ScrollView
- Animated.Text
- Animated.View
- Animated.FlatList
- Animated.SectionList
