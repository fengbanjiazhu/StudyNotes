---
sidebar_position: 1
---

# 介绍

这里是个人笔记，使用 `Docusaurus` 创建。 会放入一些常用指令，笔记等。

这里贴一下找到的[markdown 语法介绍](https://keatonlao.gitee.io/a-study-note-for-markdown/syntax/)。

顺便放一下[官方特性文档](https://www.markdownguide.org/tools/docusaurus/)，需要的时候可以去看。

## Markdown 特性

### 加粗

使用星号 \*\* 文字 \*\* 包裹文字，可以**加粗文字**。

### 方框包裹

使用反引号 \` 文字 \` 包裹文字，可以`方框包裹文字`。

### 链接

使用 \[包裹文字\] \(并添加链接\) ，可以创建超链接。[类似 a 标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a)

### 列表

使用 \- 开头创建列表。 其它行缩进的\-则会变成子列表。

- 今天学什么
  - JS
  - TS
  - JAVA

### 代码

代码是最需要的功能了，正确的放置代码部分，可以快捷复制等好功能。

代码块的创建，以 bash 指令为例： \`\`\`bash title="install" 代码片段 \`\`\` 效果如下：

```bash title="install"
npm init docusaurus@latest my-website classic
```

#### 代码块高亮

默认自带命令有：
`//highlight-next-line` 可以高亮下一行。`highlight-start`, 和 `highlight-end` 包裹多行，可以使一部分代码都高亮。
效果如下：

```js title="highlight"
// highlight-next-line
const str = "Hello";
```

也可以自定义命令，比如我创建了`//error next line` 可以警告下一行，`//correct next line` 可以通过下一行。
自定义的方法可以参考官网教程的 [代码块部分](https://docusaurus.io/zh-CN/docs/markdown-features/code-blocks)

```ts title="highlight"
// error next line
const a: number = "Hello";
// correct next line
const b: string = "Hello";
```

### 图片

想要嵌入图片，首先要将图片资源放入文件夹内。我习惯某章的图片放入该章节的根目录的 image 文件夹内。

嵌入方式：

```markdown title="image"
![图片名称](./文件路径)
```

### 表格

表格也自带在其中，因为格式很复杂，我直接写到用户 snippet 了，只有 md 文件可以使用：`table`。

### 折叠

没想到啊，markdown 是可以使用 html 嵌入的。
所以折叠使用的是 html 语法

```html
<details>
  <summary>标题写这里</summary>
  <div>折叠的内容写这里</div>
</details>
```

<details>
  <summary>标题写这里</summary>
  <div>折叠的内容写这里</div>
</details>
