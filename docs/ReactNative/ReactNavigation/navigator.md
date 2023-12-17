---
sidebar_position: 2
---

# 配置 Navigator

有多种不同的 Navigator，自己用过三种，先写这三种，之后用了其余的再做补充。

## Stack Navigator 堆栈导航

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

## BottomTab 底部导航

十分常见的底部导航栏。

![BottomTabNav](../images/RN-navigator-1.png)

与之前的使用方法类似。

```js title="BottomTabNavigator"
// correct next line
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MealsNavigation from "./MealsNavigation";
import FavoriteNavigation from "./FavoriteNavigation";
import Colors from "../constants/Colors";

// correct next line
const Tab = createBottomTabNavigator();

function MealAndFavNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: Colors.accentColor }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigation}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Fav"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MealAndFavNavigation;
```

:::note 部分参数解释
`headerShown`：是否显示 Header；

`tabBarActiveTintColor`：激活按钮的颜色

`tabBarIcon`：按钮 Icon
:::
