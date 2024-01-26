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

## 重要概念

此部分参考了[这篇知乎](https://zhuanlan.zhihu.com/p/30713987)。部分还不太明白，之后使用再做详细补充。

Docker 从狭义上来讲就是一个进程，从广义上来讲是一个虚拟容器，其实更专业的叫法是应用容器（ Application Container ），Docker 进程和普通的进程没有任何区别，它就是一个普通的应用进程。不过是用来操作镜像文件的。所以 Docker 进程+构建的应用镜像文件就等于 Docker 容器。

明确几个 docker 重要的基本概念吧，镜像，容器，仓库。

### 镜像 Images

镜像 Docker images，就类似于 VM 虚拟机里面的快照，但是可比快照轻量化多了。快照不懂？那可以把 images 直接理解成一个文件夹。我们可以通过 ID 或者易识别的名字+tag 来确认唯一的目标镜像。

ImagesID 是一个 64 位的字符，但是一般我们都是使用前面 12 位就足够区别了。

我们一般的镜像可以命名为类似 centos:latest、centos:centos7.1.1503 等等。

### 容器 Containers

容器 Docker containers，你可以从镜像中创建容器，这如同从快照中创建虚拟机，不过更轻量，启动更快，秒启。

应用是在容器中运行的，打个比方，你首先下载了一个 Ubuntu 的镜像，然后又安装 mysql 和 Django 应用及其依赖，来完成对它 Ubutun 镜像的修改，一个个人觉得非常完美应用镜像生成了！就把这个镜像分享给大家使用，大家通过这个镜像就生成一个容器。容器启动之后就会运行 Django 服务了。

## 安装

[点击这里去官方网站下载 Docker 桌面程序](https://docs.docker.com/get-docker/)

与其他的软件安装没什么区别，安装好后可以使用命令检查版本号

```bash
Docker --version
```

使用一下试试！
