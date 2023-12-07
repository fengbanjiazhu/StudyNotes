---
sidebar_position: 2
---

# Node

储存 Node 与 npm 相关指令。

## 清除缓存

启动项目时清除缓存

```bash
npm start --reset-cache
```

## 跳过依赖检查

安装 package 时跳过依赖检查

```bash
npm i xxx --legacy-peer-deps
```

## NVM

### 安装 Node 版本

使用 nvm 安装指定 npm 版本使用。

```bash title="Install 10.16 version example"
nvm install 10.16.0
```

### 切换 Node 版本

切换指定版本。

```bash
nvm use 10.16.0
```

### 查看已安装 Node 列表

```bash
nvm ls
```
