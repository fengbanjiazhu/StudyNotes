---
sidebar_position: 1
---

# 基础

React Navigation 是给 React Native 使用的导航器(`类似 React 的路由`)。用来给我们的 APP 切换页面。

[官方文档](https://reactnavigation.org/)

其中有 `Stack` 和 `BottomTab`，`Drawer` 等不同的导航器，可以嵌套，如 tab 中的某个页面可以 被 stack 覆盖。

:::note
`Stack` 堆栈导航，最基础的切换页面。根据点击路径，将目标页面放在**最上面**。

`Bottom Tab` 底部导航 Tab 栏，最常使用的导航之一。

`Drawer` 是侧面滑出来的导航，也经常见到。
:::

## 安装

啥也别说了，一口气全安装好，不需要的之后再删除吧，随着学习增加，需要安装的命令越来越多。

```bash
npm install react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view @react-navigation/stack  @react-navigation/bottom-tabs @react-navigation/native react-native-reanimated react-native-gesture-handler
```

## 初始化

### 1 在 App 或者 index 文件的顶部引入。

```js title="App.js"
// 必须在第一行
import "react-native-gesture-handler";
```

### 2 使用 NavigationContainer 包裹根组件

```js title="App.js"
import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./Navigator/MainNavigator";

function App() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
```

### 3 引入其他配置好的导航

配置其余导航在后面细说。
