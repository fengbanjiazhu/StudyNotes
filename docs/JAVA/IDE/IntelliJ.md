---
sidebar_position: 1
---

# IntelliJ 技巧

记录一些 IntelliJ 的使用技巧，方便写代码。

## 比较代码

在左侧 `项目/project` 中，右键选中`想要比较的代码`，之后选择`参考的代码`，这样就可以开启 compare 模式。

![compare](./images/compare.jpg)

:::note
还可以比较整个文件夹，方便查看整个项目中更改的部分，或者忘记更改的部分。
:::

## 本地历史记录

在左侧 `项目/project` 中，右键选中`想要查看的代码`，之后选择本地历史记录，可以查看 IntelliJ 保存在本地的代码历史，方便更改，对比不同，回溯等。

![local history](./images/history.jpg)

## 设置 Snippets

`command` + `,` 打开设置

寻找`编辑器` - `实时模版`

添加想要的 Code Snippets

## 代码自动补全

### Getter & Setter

通过 `代码` - `生成` (或直接 `command + n`) - `getter`

选择对应字段，来自动生成 getter 函数。

具体可以看[getter 相关笔记](../Class/setterAndGetter)
