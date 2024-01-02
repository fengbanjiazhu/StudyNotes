---
sidebar_position: 3
---

# React & React Native

## React 创建组件

### rfce & rfc

`rfce` 或者 `rfc` 可以快速创建函数式组件。

```ts
import React from "react";

function TestOne() {
  return <div>TestOne</div>;
}

export default TestOne;
```

### rcc

快速创建类组件

### rafc

快速创建箭头函数组件

## RN 创建组件

### rnf

快速创建 RN 函数式组件

```ts
import { View, Text } from "react-native";
import React from "react";

export default function TestOne() {
  return (
    <View>
      <Text>TestOne</Text>
    </View>
  );
}
```
