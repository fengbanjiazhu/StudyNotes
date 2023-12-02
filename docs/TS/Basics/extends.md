---
sidebar_position: 7
---

# 进阶技巧

TypeScript 的一些进阶技巧。

## 声明全局模块 -d

在根目录创建 typings.d.ts 文件，并声明想要的文件类型，如.png，.mtl 等。

```ts title="typings.d.ts"
declare module "*.png";
declare module "*.obj";
```

## Omit

使用 Omit 可以根据已有 type ，快速创建新的 type。（筛选 type）
当我们已经有一个复杂 type alias 的时候，我们*只想要检测部分属性*，可以创建一个新 type。

使用 `Omit<Type, unWantedField>` 命令创建，传入**Type** 与 **祛除字段**，即可得到一个新的 type。

```ts title="Omit"
type User = {
  name: string;
  age: number;
};
// highlight-next-line
type Guest = Omit<User, "name">;
// type User = { age: number; };
```
