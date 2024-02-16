---
sidebar_position: 1
---

# 简介

因为课程需要，所以了解一下基础的 Python。

首先 Python 的安装，我直接参考了[菜鸟教程](https://www.runoob.com/python3/python3-install.html)

反正已经安好了，下次换电脑再去官网看吧。

## 使用

目前 Python 的使用：

1. 我直接在安装 Python 后的 IDLE 中用。
2. 直接在 Mac 的终端中使用。(使用 python3 -V 查看版本号 Python 3.11.8)
3. 在 VS Code 中安装扩展：VS Code Python。(还得是 VS Code，JAVA 好好反思一下自己)

Python 语法似乎比较简单，既不需要 JS/TS 那种 const 来定义变量，也不需要 JAVA 那种 int 来声明变量+类型

Python 文件类型为 .py

```python title="test.py"
num = 1
print(num)
print("======")

num = 2
print(num)
# 1
# ======
# 2
```

书写如上 Code 之后，点击 VS Code 右上角的运行即可

:::danger
有一点需要注意，python 的编程中，代码，命令前不能有缩进(indent)或者空格。

```python
# error next line
  print("Hello Jeff")
# 此处会报错
```

:::
