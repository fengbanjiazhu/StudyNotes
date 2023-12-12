---
sidebar_position: 1
---

# JShell

JShell 是一个  Java Shell 工具，是一个用于学习 Java 编程语言和 Java 代码原型的交互式工具。
JShell 是一个 Read Evaluate Print Loop ( 中文 「 交互式解释器 」， 简称  REPL )，JShell 会在输入时运行声明，语句和表达式，并立即显示结果。

JShell 可帮助我们在开发程序时尝试即时代码并轻松探索可能的选择。我们可以在 JShell 中测试单个语句，尝试不同的方法变体，并在 JShell 会话中试验不熟悉的 API。
我们可以首先将自己写的代码片段粘贴到 JShell 中运行，查看结果，如果正确，就将 JShell 中的代码粘贴回程序编辑器或 IDE 中。

## 启动命令 JShell

```bash
jshell
```

成功后会看到：

```
|  Welcome to JShell -- Version 17.0.9
|  For an introduction type: /help intro
```

### /list

显示全部输入的代码行

### /var

显示全部变量

### Command + D

关闭 JShell

### /exit

退出 JShell
