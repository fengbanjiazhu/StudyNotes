---
sidebar_position: 1
---

# React 基础

## React 项目创建

### 原生创建

```bash
npx create-react-app my-app
cd my-app
npm start
```

### Vite 创建

```bash
npm create vite@latest
```

#### Vite 需要安装额外的依赖

```bash
npm i --save-dev vite-plugin-eslint eslint-config-react-app eslint
```

#### 修改 eslint 配置

创建文件，并且修改：

```
.eslintrc.json
```

在文件中添加：

```js title=".eslintrc.json"
{
  "extends": "react-app"
}
```

#### 修改 .eslintrc.cjs 规则

该文件为自动生成，记得添加以下规则，防止 type 验证与未使用的参数验证。

```js title=".eslintrc.cjs"
module.exports = {
  root: true,
  ...
  // correct-start
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/n": "off",
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
  },
  // correct-end
};
```

#### 修改 vite 配置

在 vite.config.js 文件中，引入 eslint 并调用

```js title="vite.config.js"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// highlight-next-line
import esLint from "vite-plugin-eslint";

export default defineConfig({
  // highlight-next-line
  plugins: [react(), esLint()],
});
```

## React 原理 VDOM

摘选自[React 核心原理浅析](https://juejin.cn/post/6987197729046790175),了解一下 React 的部分原理

### VDOM 是什么?

Virtual DOM 其实就是用 JavaScript 对象表示的一个 DOM 节点, 内部包含了节点的 tag , props 和 children .

为何使用虚拟 DOM? 因为直接操作真实 DOM 繁琐且低效, 通过虚拟 DOM, 将一部分昂贵的浏览器重绘工作转移到相对廉价的存储和计算资源上.

### 如何将 JSX 转换成 VDOM?

通过 babel 可以将 JSX 编译为特定的 JavaScript 对象

```js
// JSX
const e = (
  <div id="root">
    <h1 className="title">Title</h1>
  </div>
);
// babel编译结果(React17之前), 注意子元素的嵌套结构
var e = React.createElement(
  "div",
  { id: "root" },
  React.createElement("h1", { className: "title" }, "Title")
);
// React17之后编译结果有所区别, 创建节点的方法由react导出, 但基本原理大同小异
```

### 如何渲 VDOM?

从上一节 babel 的编译结果可以看出, 虚拟 DOM 中包含了创建 DOM 所需的各种信息, 对于首次渲染, 直接依照这些信息创建 DOM 节点即可.

但虚拟 DOM 的真正价值在于“更新”: 当一个 list 中的某些项发生了变化, 或删除或增加了若干项, 如何通过对比前后的虚拟 DOM 树, 最小化地更新真实 DOM? 这就是 React 的核心目标.

## React Diffing

"Diffing"即“找不同”, 就是解决上文引出的 React 的核心目标——如何通过对比新旧虚拟 DOM 树, 以在最小的操作次数下将旧 DOM 树转换为新 DOM 树.

在算法领域中, 两棵树的转换目前最优的算法复杂度为 O(n\*\*3) , n 为节点个数. 这意味着当树上有 1000 个元素时, 需要 10 亿次比较, 显然远远不够高效.
React 在基于以下两个假设的基础上, 提出了一套复杂度为 O(n) 的启发式算法

:::note

1. 不同类型(即标签名、组件名)的元素会产生不同的树;
2. 通过设置 key 属性来标识一组同级子元素在渲染前后是否保持不变.
   在实践中, 以上两个假设在绝大多数场景下都成立.

:::

### Diffing 算法描述

#### 不同类型的元素/组件

当元素的标签或组件名发生变化, 直接卸载并替换以此元素作为根节点的整个子树.

#### 同一类型的元素

当元素的标签相同时, React 保留此 DOM 节点, 仅对比和更新有改变的属性, 如 className、title 等, 然后递归对比其子节点.
对于 style 属性, React 会继续深入对比, 仅更新有改变的属性, 如 color、fontSize 等.

#### 同一类型的组件

当组件的 props 更新时, 组件实例保持不变, React 调用组件的 componentWillReceiveProps() componentWillUpdate() 和 componentDidUpdate() 生命周期方法, 并执行 render() 方法.
Diffing 算法会递归比对新旧 render() 执行的结果.

#### 对子节点的递归

当一组同级子节点(列表)的末尾添加了新的子节点时, 上述 Diffing 算法的开销较小; 但当新元素被插入到列表开头时, Diffing 算法只能按顺序依次比对并重建从新元素开始的后续所有子节点, 造成极大的开销浪费.
解决方案是为一组列表项添加 key 属性, 这样 React 就可以方便地比对出插入或删除项了.
关于 key 属性, 应稳定、可预测且在列表内唯一(无需全局唯一), 如果数据有 ID 的话直接使用此 ID 作为 key, 或者利用数据中的一部分字段哈希出一个 key 值.
避免使用数组索引值作为 key, 因为当插入或删除元素后, 之后的元素和索引值的对应关系都会发生错乱, 导致错误的比对结果.
避免使用不稳定的 key(如随机数), 因为每次渲染都会发生改变, 从而导致列表项被不必要地重建.

### 递归的 Diffing

在 1.2 节中的虚拟 DOM 对象中可以得知: 虚拟 DOM 树的每个节点通过 children 属性构成了一个嵌套的树结构, 这意味着要以递归的形式遍历和比较新旧虚拟 DOM 树.
2.1 节的策略解决了 Diffing 算法的时间复杂度的问题, 但我们还面临着另外一个重大的性能问题——浏览器的渲染线程和 JS 的执行线程是互斥的, 这意味着 DOM 节点过多时, 虚拟 DOM 树的构建和处理会长时间占用主线程, 使得一些需要高优先级处理的操作如用户输入、平滑动画等被阻塞, 严重影响使用体验.

#### 时间切片(Time Slice)

为了解决浏览器主线程的阻塞问题, 引出 时间切片 的策略——将整个工作流程分解成小的工作单元, 并在浏览器空闲时交由浏览器执行这些工作单元, 每个执行单元执行完毕后, 浏览器都可以选择中断渲染并处理其他需要更高优先级处理的工作.
浏览器中提供了 requestIdleCallback 方法实现此功能, 将待调用的函数加入执行队列, 浏览器将在不影响关键事件处理的情况下逐个调用.
考虑到浏览器的兼容性以及 requestIdleCallback 方法的不稳定性, React 自己实现了专用于 React 的类似 requestIdleCallback 且功能更完备的 Scheduler 来实现空闲时触发回调, 并提供了多种优先级供任务设置.

#### 递归与时间切片

时间切片策略要求我们将虚拟 DOM 的更新操作分解为小的工作单元, 同时具备以下特性:

- 可暂停、可恢复的更新;
- 可跳过的重复性、覆盖性更新;
- 具备优先级的更新.
  对于递归形式的程序来说, 这些是难以实现的. 于是就需要一个处于递归形式的虚拟 DOM 树上层的数据结构, 来辅助完成这些特性.
  这就是 React16 引入的重构后的算法核心——Fiber.
