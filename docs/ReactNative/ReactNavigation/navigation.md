---
sidebar_position: 3
---

# navigation 页面跳转

通过 navigation，我们可以操作页面(路由的跳转)。[官网文档参考](https://reactnavigation.org/docs/getting-started)

## navigation

在 RN 中，我们需要操作 navigation 的函数来实现跳转。

```js title="navigation example"
export default function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;
  const handleJump = ()=>{
    // correct next line
    navigation.navigate("OtherPage")
  }
  ...
}
```

在导航器 Screen 的组件的中，可以解构出 navigation，这个 navigation 包含了大量的方法供我们使用。

### useNavigation

除了解构之外，还可以使用 useNavigation 钩子来获取 navigation。

```js title="useNavigation"
// correct next line
import { useNavigation } from "@react-navigation/native";

function MyBackButton() {
  // correct next line
  const navigation = useNavigation();

  return (
    <Button
      title="Back"
      onPress={() => {
        // correct next line
        navigation.goBack();
      }}
    />
  );
}
```

## 方法 Methods

### navigate

最常用的跳转函数。

```js title="navigate"
export default function MealDetailScreen({ route, navigation }) {
  const { mealId } = route.params;
  const handleJump = ()=>{
    // correct next line
    navigation.navigate("OtherPage")
  }
  ...
}
```
