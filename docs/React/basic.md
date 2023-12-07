---
sidebar_position: 1
---

# 创建项目

React 经常使用，跳过基础部分了，写一下安装。

## 原生创建

```bash
npx create-react-app my-app
cd my-app
npm start
```

## Vite 创建

```bash
npm create vite@latest
```

### Vite 需要安装额外的依赖

```bash
npm i --save-dev vite-plugin-eslint eslint-config-react-app eslint
```

### 修改 eslint 配置

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

### 修改 .eslintrc.cjs 规则

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

### 修改 vite 配置

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
