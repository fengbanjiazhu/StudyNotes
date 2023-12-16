---
sidebar_position: 3
---

# RN 原生 API

了解 RN 的原生 API，来帮助我们开发。
[点击查看官方原生 API 文档](https://reactnative.dev/docs/accessibilityinfo)

## Platform

可以检查平台信息

```js title="Platform"
import { Platform, Text, ScrollView } from "react-native";

console.log(Platform.OS);
// log: ios

const App = () => {
  return (
    <ScrollView>
      <Text>{Platform.OS}</Text>
      <Text>{Platform.Version}</Text>
    </ScrollView>
  );
};
```

## Linking 链接 API

链接 API，可以打开网页，地图，电话等。是**异步 API**。

Linking 中有两个方法：`canOpenURL(是否可以打开链接,boolean)` 与 `openURL(打开链接)`。

```js title="Linking"
import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const supportedURL = "https://google.com";
const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // highlight-next-line
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // highlight-next-line
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
    </View>
  );
};
```

:::note 使用案例一览
Linking 跳转地图：`await Linking.openURL("geo:纬度，经度")`

Linking 跳转至电话：`await Linking.openURL("tel:号码")`

Linking 跳转到发短信：`await Linking.openURL("smsto:号码")`

Linking 跳转到发送邮件：`await Linking.openURL("mailto:邮箱")`

Linking 打开设置：`await Linking.openSettings()`
:::

## Dimensions 尺寸

获取屏幕高度/宽度。

```js title="Dimensions"
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
```

## e.nativeEvent

nativeEvent 是 React Native 中用于访问`原生事件信息`的一个属性。

当您在 React Native 中处理各种组件事件时，事件对象通常包含一个 `nativeEvent 属性`，其中包含了与**底层原生平台相关的事件信息**。

这允许您在跨平台开发中直接访问底层原生事件数据，以执行更高级的操作或与原生模块进行交互。

例如，在触摸事件处理程序中，nativeEvent 属性包含有关**触摸事件**的信息，如触摸的**位置、速度、方向**等，具体信息取决于事件类型（例如，触摸开始、移动、结束等）。

```js title="nativeEvent"
const handlePress = (e) => {
  const { nativeEvent } = e;
  const { locationX, locationY } = nativeEvent;
  // 获取了X，Y的位置
};
```
