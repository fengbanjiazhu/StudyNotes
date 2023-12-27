---
sidebar_position: 1
---

# 路由基础

路由一直在更新，这里是常用的 [V6.2](https://reactrouter.com/en/6.21.1/upgrading/v6-data) 的一些笔记。

[官方文档](https://reactrouter.com/en/main)也放在这里

路由就是用来切换多个页面的根本，通过访问不同的路径，切换不同的组件，来实现多页面程序。

```js title="Example"
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/catalog" element={<Product />} />
  </Routes>
</BrowserRouter>
```

## 创建路由

首先安装库

```bash
npm i react-router-dom
```

### 基础使用

其次再跟目录/路由目录中配置路由。

```js title="App.js"
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Me from "./pages/Me";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalog/:slug" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/me" element={<Me />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

### 路由嵌套

刚刚我们的 `Routes` 中，有一个总路由，他的组件是 `Layout` 。

我们经常会遇到路由嵌套，这里就是一个很好的例子。在 Layout 的路由下，其中包括了很多不同的路由，而 Layout 中我们应该如何展示这些路由呢？

#### Outlet

我们可以使用 `Outlet` 组件，来展示所有内部包含的子路由。

```js title="Layout.js"
// correct next line
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ props }) => {
  return (
    <>
      <Header {...props} />
      <div className="container">
        <div className="main">
          // correct next line
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
```
