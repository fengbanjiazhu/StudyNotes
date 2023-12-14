---
sidebar_position: 1
---

# React Native 基础

关于 React Native 的基础与创建

## 创建项目

[set up 官网参考](https://reactnative.dev/docs/environment-setup)

### Expo Cli Tool

第三方免费服务，方便控制 App，
简化了很多操作，但是限制在了 expo 的系统中。
适合新手开发，直接调用接口

```bash
npx create-expo-app --template
```

### React Native Cli

由 React Team 开发，是一个基础 Cli，你需要配置所有的文件
几乎没有集成方法，不便捷。但是适配很好。
适合大型开发者来开发更复杂，更多控制权的程序。

```bash title="MacOS init"
arch -arm64 npx react-native init ProjectName
```

```bash title="Start project"
npx react-native start
npm run ios
```

### Debug

使用 xcode 获取更多控制权的时候,
open `xxx.xcworkspace` instead of xxx.xcodeproj

## TS + RN

如果是 TS，还需要安装

```bash
npm i --save-dev typescript
```

```bash
tsc --init
```

```bash
npm i --save-dev @types/react @types/react-native
```
