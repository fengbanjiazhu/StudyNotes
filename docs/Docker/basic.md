---
sidebar_position: 1
---

# 基础

什么是 Docker？
从字面意义上讲，Docker 的意思是码头工人。用来拆卸，安装集装箱的，所以 Docker 也是差不多的作用：管理 Container。

Docker 是一个用于开发、发布和运行应用程序的开放平台，他像一个虚拟的集装箱/Container。

Container 是代码的**隔离环境**。这意味着它不知道您的**操作系统或文件**。

它在由 Docker Desktop 提供的环境中运行。容器包含代码运行所需的一切，包括基本操作系统。您可以使用 Docker Desktop 来管理和探索您的容器。

:::note
也就是说，有了 Docker 我们不需要像之前一样手动切换系统的 Node 环境，不需要管理乱七八糟的配置(有时候就算 npm i 也会导致各种冲突，失败。)

Docker 直接可以拷贝，克隆一个虚拟环境出来，并且快速启动 APP。
:::

## 安装

[点击这里去官方网站下载 Docker 桌面程序](https://docs.docker.com/get-docker/)

与其他的软件安装没什么区别，安装好后可以使用命令检查版本号

```bash
Docker --version
```

使用一下试试！
