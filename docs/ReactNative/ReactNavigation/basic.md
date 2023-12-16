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

配置其余导航在下面细说。

## 配置其他导航

### Stack Navigator 堆栈导航

- 使用 createNativeStackNavigator 创建一个导航器

  - 如 const Stack = createNativeStackNavigator();

- 使用 Stack.Navigator 包裹 Stack.Screen。
- Stack.Screen 中类似 React 路由，包含`唯一 ID(路由地址)` 与`渲染 Component`。

:::note
集合页面可以规划好 title，style 等
单独页面的 header 可以设置在单个路由上，
也可以使用 navigation.setOptions 设置在该组件内部。
:::

```js title="StackNavigator"
// correct next line
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoriesMealsScreen from "../screens/CategoriesMealsScreen";
import Colors from "../constants/Colors";

// correct next line
const MealsNavigator = createNativeStackNavigator();

function MealsNavigation() {
  return (
    <MealsNavigator.Navigator
      // highlight-next-line
      initialRouteName="Categories"
      screenOptions={{
        headerTitleStyle: { color: Colors.primaryColor },
        headerBackTitle: "Back",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <MealsNavigator.Screen name="Categories" component={CategoriesScreen} />
      <MealsNavigator.Screen
        // highlight-start
        name="CategoryMeals"
        component={CategoriesMealsScreen}
        options={({ route }) => ({ title: route.params.title })}
        // highlight-end
      />
    </MealsNavigator.Navigator>
  );
}

export default MealsNavigation;
```

:::note
`name`： 标识符，就是跳转时输入的 ID 名称。

`component`: 渲染的组件。

`options`: 可以传入配置，如 title，header 等，可以传入函数，接受 route 信息，返回一个 obj 并动态设置数据。
:::
