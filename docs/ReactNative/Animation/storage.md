---
sidebar_position: 5
---

# RN 数据存储

RN 数据存储有很多种不同的方式。

## AsyncStorage

Async Storage 只能保存 String 类型的数据，如果保存 obj 的话，使用 `JSON.stringify()`和 `JSON.parse()`来处理。

[官网](https://react-native-async-storage.github.io/async-storage/docs/install/)

### 安装

```bash
npm install @react-native-async-storage/async-storage
```

### 使用

引入包。

```js title="Storage.js"
import AsyncStorage from "@react-native-async-storage/async-storage";
```

:::note 保存数据
保存数据 `setItem()`

```js title="Storage.js"
const storeData = async (value) => {
  try {
    // correct next line
    await AsyncStorage.setItem("my-key", value);
  } catch (e) {
    // saving error
  }
};
```

:::

:::note 读取数据
读取数据 `getItem()`

```js title="Storage.js"
const getData = async () => {
  try {
    // correct next line
    const value = await AsyncStorage.getItem("my-key");
    if (value !== null) {
      // value previously stored
    }
  } catch (e) {
    // error reading value
  }
};
```

:::

## react-native-firebase/app

先放一下官方文档，自己还没有使用。

[本地存储](https://rnfirebase.io/app/usage)

[云存储](https://rnfirebase.io/storage/usage)

## SQLite

SQL 本地存储

先放一下官方文档，自己还没有使用。

[官方文档](https://docs.expo.dev/versions/latest/sdk/sqlite/#query)

## Realm

MongoDB 开发的本地存储，NoSQL

先放一下[官网](https://realm.io/)与[官方文档](https://www.mongodb.com/docs/realm/sdk/react-native/realm-files/configure-a-realm/)，自己还没有使用。
