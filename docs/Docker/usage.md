---
sidebar_position: 2
---

# 使用

尝试使用 Docker 的笔记。

## 通过 Docker Desktop

这里按照官方的步骤来试了一下，详细可以[参考这里](https://docs.docker.com/guides/walkthroughs/what-is-a-container/)。

步骤不是很难，搜索了 docker/welcome-to-docker，然后 Run

实际上内部应该是类似于 Github 的克隆项目，克隆下来后根据 package.json 文件来安装需要的依赖。

然后在选项中，输入项目名称，运行端口号等信息，再点击一次 Run 就可以 build 了。

最后成功在指定端口看到页面了。

接下来试试自己的项目，并且在 VS Code 运行。

## 通过 VS Code

使用 Uptown 项目来测试一下。

### 克隆项目

```bash
git clone git@github.com:fengbanjiazhu/Uptown.git
```

克隆完毕后，我们的文件夹中已经有 Uptown Folder 了。

### 初始化 Docker

在**根目录**下，创建 `Dockerfile` 文件，与`.dockerignore` 文件。

#### .dockerignore 文件

内部只需要写明 node_modules。

(不复制 node_modules)

#### Dockerfile 文件

在文件内部要写明以下：

```js title="Dockerfile"
// node version
FROM node:18-alpine

// working dir
WORKDIR /client

// copy from to
COPY package*.json .

// run command
RUN npm install

// copy from to
COPY . .

// port
EXPOSE 5173

// run command, such as ["npm","run","dev"]
CMD [ "npm","start" ]
```

#### Build 与查看 images

创建好后，运行以下命令：

```bash
docker build -t uptown-app . -f Dockerfile
```

等待 build 完成，先检查我们运行的情况：

```bash
docker images
```

可以打开查看当前 docker 正在运行的镜像文件。

#### 运行

最后可以去指定端口访问内容了，使用以下命令：

```bash
docker run -p 5173:5173 uptown-app:test
```
