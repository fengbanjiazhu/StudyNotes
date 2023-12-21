---
sidebar_position: 2
---

# 动画示例

展示一些动画的使用案例

## 平移 translation

横向移动，更改 margin 的值。

:::note 支持的属性
marginLeft，marginRight，marginTop，marginBottom，
translateX， translateY，
Left， right， top， bottom，
:::

```js title="translation"
import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  // correct next line
  const marginLeft = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
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

## 旋转 Rotate

需要输入字符串的动画与之前不同，需要进行映射。（不支持模板字符串）
调用 interpolate 方法，传入输入的 range，与输出的 range，来映射值。

:::note interpolate
映射：将值变为设定的形态返回，如这里如果 rotate 值为 30，则 rotateValue 变成"30deg"。

```js
const rotateValue = rotate.interpolate({
  inputRange: [0, 30],
  outputRange: ["0deg", "30deg"],
});
```

:::

```js title="Rotate"
import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  // correct-start
  const rotate = useRef(new Animated.Value(0)).current;
  const rotateValue = rotate.interpolate({
    inputRange: [0, 30],
    outputRange: ["0deg", "30deg"],
  });
  // correct-end

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          // correct-start
          Animated.timing(rotate, {
            toValue: 30,
            duration: 1000,
            useNativeDriver: false,
          }).start();
          // correct-end
        }}
      />
      <Animated.View
        // correct next line
        style={[styles.container, { transform: [{ rotate: rotateValue }] }]}
      ></Animated.View>
    </View>
  );
};
```

## 缩放 Scale

缩放更改 scale 值。放大：-> 1.5 ..., 缩小：-> 0.5 ...
:::warning
缩放与基础使用类似，初始值需为 1，不可以为 0。
:::

```js title="scale"
import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  // correct next line
  const scale = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          // correct-start
          Animated.timing(scale, {
            toValue: 1.5,
            duration: 1000,
            useNativeDriver: false,
          }).start();
          // correct-end
        }}
      />
      // correct next line
      <Animated.View style={[styles.container, { transform: [{ scale: scale }] }]}></Animated.View>
    </View>
  );
};
```

## 透明度 opacity

初始也是 1，其余一样

```js title="opacity"
import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  // correct next line
  const opacity = useRef(new Animated.Value(1)).current;

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          // correct-start
          Animated.timing(opacity, {
            toValue: 0.5,
            duration: 1000,
            useNativeDriver: false,
          }).start();
          // correct-end
        }}
      />
      // correct next line
      <Animated.View style={[styles.container, { opacity: opacity }]}></Animated.View>
    </View>
  );
};
```

## 矢量动画 Vector - ValueXY

与之前的类似，只是传入的值变成了 x 和 y 两个。

修改的时候 toValue 也是 2 个值，使用该值的时候也变成 `variable.x`, `variable.y`

```js title="Vector"
import { View, Text, Animated, Button, StyleSheet } from "react-native";
import React, { useRef } from "react";

const AnimationTest = () => {
  // correct next line
  const vector = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  return (
    <View style={styles.root}>
      <Text>AnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          // correct-start
          Animated.timing(vector, {
            toValue: { x: 300, y: 400 },
            duration: 1000,
            useNativeDriver: false,
          }).start();
          // correct-end
        }}
      />
      <Animated.View
        // correct next line
        style={[styles.container, { marginLeft: vector.x, marginTop: vector.y }]}
      ></Animated.View>
    </View>
  );
};
```
