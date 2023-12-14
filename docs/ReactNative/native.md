---
sidebar_position: 2
---

# RN 原生组件

## Styles

使用 StyleSheet.create 创建一个类似 css 的对象, 使用时直接添加在类名中。

```js title="StyleSheet"
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const Login = () => {
  return (
    // highlight-next-line
    <View style={styles.root}>
      <View>...</View>
    </View>
  );
};
// highlight-start
const styles = StyleSheet.create({
  root: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "column",
    alignItems: "center",
    paddingHorizontal: 56,
  },
});
// highlight-end
```

## Views 容器

类似 JS 的 Div，直接引入使用即可。

```js title="View"
import { Text, View } from "react-native";

const Home = () => {
  return (
    // highlight-next-line
    <View>
      <Text>...</Text>
    </View>
  );
};
```

## Text 文字

类似 JS 中的 P 元素的作用。
:::warning
注意：React Native 中的所有文字**必须写在 Text 组件中**，不可以直接写在 view（也就是 div）里
:::

```js title="Text"
import { Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      // highlight-next-line
      <Text>...</Text>
    </View>
  );
};
```

## Button 按钮

RN 中的 Button 组件不是包裹文字，而是将按钮文字**传入 title 属性中**。

函数也是 `OnPress` 中，而不是 OnClick。

```js title="Button"
import { Button, View } from "react-native";

const Home = () => {
  return (
    <View>
      // correct next line
      <Button onPress={() => {}} title="Click Me" />
    </View>
  );
};
```

## TextInput 输入框

与 js 的区别不太大.

```js title="TextInput"
import { SafeAreaView, TextInput } from "react-native";
const TextInputExample = () => {
  return (
    <SafeAreaView>
      <TextInput onChangeText={onChangeNumber} value={number} placeholder="placeholder" />
    </SafeAreaView>
  );
};
```

## ScrollView 滚动容器(已弃用)

放入 ScrollView 中的才可以滑动，否则超出屏幕部分也不能滑动看到

## FlatList 高性能列表渲染器

因为 ScrollView 会一次性渲染所有的内容，即使是可视屏幕之外.
使用 FlatList 可以替代它，更高性能

```js title="FlatList"
import { SafeAreaView, View, FlatList, Text } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  ...
];

const App = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
```

:::note FlatList 解析
`keyExtractor`：需要传入一个 key 字段来帮助 React 分辨。如果字段直接为 key/id 则不需要添加该属性。

`data`：待渲染的 array

`renderItem`：接受一个 Fn(组件)，如何渲染数据。结构的 item 就是每个数据本身。
:::

## TouchableOpacity 透明度点击

用来包裹元素的组件，点击的时候触发用户反馈。

prop 中包含多个方法，如 onLongPress 是长按时效果。

[点击查看 TouchableOpacity 组件全部 Props 列表](https://reactnative.dev/docs/touchablewithoutfeedback#props)

```js title="TouchableOpacity"
import { Text, TouchableOpacity, View } from "react-native";
const App = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);

  return (
    <View>
      <View>
        <Text>Count: {count}</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};
```

## TouchableHighlight 高亮点击

点击后可以添加 highlight 效果。

```js title="TouchableHighlight"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TouchableHighlightExample = () => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Text>Touch Here</Text>
      </View>
    </TouchableHighlight>
  );
};
```

## Modal 模态框

Visible 是可视状态。 animationType 是动画效果，现在自带划入效果

```js title="Modal"
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>...</View>
      </Modal>
    </View>
  );
};
```

## ImageBackground 背景图片

设置一个背景图片，包裹的内容会在图片上面。

:::warning
必须设置宽高
:::

```js title="ImageBackground"
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

const App = () => (
  <View>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text>Inside</Text>
    </ImageBackground>
  </View>
);
```
