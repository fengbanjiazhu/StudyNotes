---
sidebar_position: 4
---

# LayoutAnimation

当布局变化时，自动将视图运动到它们新的位置上。（安卓需要手动启动）。[官方文档](https://reactnative.cn/docs/next/layoutanimation)

动画中，如果**仅仅是为了布局的变化**，那么我们就可以使用 `LayoutAnimation`。

- 高性能
- 简单实用，无需写复杂动画代码

```js
static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)
```

## 快速使用

- 引入 LayoutAnimation
- 调用 configureNext
- 传入必选`Config 动画配置`参数。(例子使用了`预设动画`)。

```js
import { View, Text, Button, StyleSheet, LayoutAnimation } from "react-native";
import React, { useState } from "react";

export default function LayoutAnimationTest() {
  const [showView, setShowView] = useState(false);

  return (
    <View style={styles.root}>
      <Text>LayoutAnimationTest</Text>
      <Button
        title="Click!"
        onPress={() => {
          // correct next line
          LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
          setShowView(!showView);
        }}
      />

      {showView && <View style={styles.container}></View>}
    </View>
  );
}
```

## Presets 预设动画

最简单的用法，有三套预设：

`spring`, `easeInEaseOut`, `linear`

```js
LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
```

## create() 自定义动画

```js
static create(duration, type, creationProp)
// static create(持续时间, 动画类型, 动画属性)
```

:::note Types 配置

- spring
- linear
- easeInEaseOut
- easeIn
- easeOut
- keyboard
  :::

:::note properties

- opacity
- scaleX
- scaleY
- scaleXY
  :::

来看一个使用例子：

```js
...
<Button
  title="Click!"
  onPress={() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        500,
        LayoutAnimation.Types.spring,
        LayoutAnimation.Properties.scaleXY,
      )
    );
    setShowView(!showView);
  }}
/>
...
```

## 可选参数

第二，三个参数为回调函数（可选）

```js
static configureNext(config, onAnimationDidEnd?, onAnimationDidFail?)
// static configureNext(动画配置, 动画结束的回调函数, 动画异常/错误的回调函数)
```

```js
<Button
  title="Click!"
  onPress={() => {
    LayoutAnimation.configureNext(
      LayoutAnimation.Presets.easeInEaseOut,
      // correct-start
      () => {
        console.log("动画结束的回调函数");
      },
      () => {
        console.log("动画异常/错误的回调函数");
      }
      // correct-end
    );
    setShowView(!showView);
  }}
/>
```
