---
sidebar_position: 2
---

# 进阶技巧

使用 z.object 创建 type，并传入要求。
Type 中的可选参数，在 zod 中需要添加 `optional`。

## Enum

外部 enum 需要是**常量**，as const。保证不会更改。
原生 TS enum 需要使用 `nativeEnum`.

```TS title="Enum"
const skillBE = ["PHP", "Node.Js", "JAVA"] as const;
enum Language {
  English = "English",
  Mandarin = "Mandarin",
}
export const UserSchema = z.object({
  username: z.string().min(2).max(10),
  age: z.number({ required_error: "age is required" }).optional(),
  email: z.string().email(),
  website: z.string().url(),
  skillFE: z.enum(["HTML", "CSS", "JS"]),
  skillBE: z.enum(skillBE),
  language: z.nativeEnum(Language),
});

export type User = z.infer<typeof UserSchema>;
```

## Tuple 元组

实用`z.tuple`创建元组验证，传入一个`[]`配置，里面是需要验证的 Schema 类型，并且可以 chain 一个`rest()`方法，来验证其余所有的类型。

```TS title="Tuple"
export const UserSchema = z.object({
  username: z.string().min(2).max(10),
  age: z.number({ required_error: "age is required" }).optional(),
  // highlight-next-line
  friends: z.tuple([z.string(), z.string()]).rest(z.number()),
});
export type User = z.infer<typeof UserSchema>;

const jeff: User = {
  username: "Jeff",
  age: 28,
  friends: ["1", "2", 3],
};
```

## Partial 参数全部可选

单个参数可选为`.optional()`,

而在 z.object() 后使用`partial()`方法，可以将 schema 中的所有参数变为可选。

```TS title="Partial"
const UserSchema = z
  .object({
    username: z.string().min(2).max(10),
    age: z.union([z.string(), z.number()]),
  })
  // highlight-next-line
  .partial();
type User = z.infer<typeof UserSchema>;
const jeff: User = {
  username: "Jeff",
};
```

## Union 可以多种类型

```TS title="Union"
export const UserSchema = z.object({
  username: z.string().min(2).max(10),
  age: z.union([z.string(), z.number()]),
  age2: z.union([z.string(), z.number()]),
});

export type User = z.infer<typeof UserSchema>;

const jeff: User = {
  username: "Jeff",
  age: "2",
  age2: 6,
};
```

## Pick 筛选字域组成 type

Pick: 指定 type 参数，来组成一个新的 Type/Schema。 (反向的 omit, omit 是移除 type 参数)

```TS title="Pick"
const UserSchema = z
  .object({
    username: z.string().min(2).max(10),
    age: z.union([z.string(), z.number()]),
  })
  // highlight-next-line
  .pick({ age: true });

type User = z.infer<typeof UserSchema>;
// type User = { age: string | number; }
```

## Extend 扩展

与原生 Extend 类似，增加字段。

```TS title="Extend"
const UserSchema = z
  .object({
    username: z.string().min(2).max(10),
    age: z.union([z.string(), z.number()]),
  })
  .extend({ email: z.string().email() });

type User = z.infer<typeof UserSchema>;
/*
type User = {
    username: string;
    age: string | number;
    email: string;
}
*/
```

## Merge 融合

类似原生 Type Alias 的 `&`作用。

```TS title="Merge"
const StudentSchema = z.object({
  name: z.string(),
  year: z.enum(["year1", "year2"]),
  class: z.string(),
});

const UserSchema = z
  .object({
    username: z.string().min(2).max(10),
    age: z.union([z.string(), z.number()]),
  })
  // highlight-next-line
  .merge(StudentSchema);
type User = z.infer<typeof UserSchema>;
/*
type User = {
    name: string;
    year: "year1" | "year2";
    class: string;
    username: string;
    age: string | number;
}
*/
```

## Record

Record 模式用于验证诸如`{ [k: string]: number }`这样的类型。这对于按 ID 存储或缓存项目特别有用。

我们有一个数据组，我们不一定确定里面有多少数据，但是我们知道所有的数据都是 "键"："值" 对。
此时我们可以使用 Record，不需要写明 key。

TypeScript 的内置 Record 类型是这样的：`Record<KeyType, ValueType>`。 但是 zod 不需要，因为实际上也没有意义：JS 会自动转换数字 key 为 String 类型，我们不需要特意指定。

当然你如果想的话也可以写两个参数，结果是一样的。

```TS title="Record"
// correct next line
// const UserSchema = z.record(z.string(),z.number()); 也一样
const UserSchema = z.record(z.number());
type User = z.infer<typeof UserSchema>;
/*
type User = {
  [x: string]: number;
}
*/

const jeff: User = {
  // error next line
  username: "Jeff", //不能将类型 "string" 分配给类型 "number"。
  age: 100,
};
```

## 自定义错误信息

创建 schema 时，通过传入配置来自定义错误信息。

```TS title="Customize"
const UserSchema = z.object({
  username: z.string({ invalid_type_error: "username has to be string type" }),
  date: z.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  count: z.number().max(5, { message: "this👏is👏too👏big" }),
});
```

## 自己练习

```TS title="types.ts"
import { z } from "zod";

// pizza
export const PizzaSchema = z.object({
  id: z.number(),
  name: z.string(),
  soldOut: z.boolean(),
  unitPrice: z.number(),
  ingredients: z.string().array(),
  imageUrl: z.string(),
});

export const MenuSchema = z.array(PizzaSchema);

export type PizzaItem = z.infer<typeof PizzaSchema>;

export type Menu = PizzaItem[];
```

类型验证：

```TS title="MenuItem.ts"
import { PizzaItem } from "../../types/types";

type MenuItemProps = {
  pizza: PizzaItem;
};

function MenuItem({ pizza }: MenuItemProps) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  // ...
}
```

Fetch 之后验证：

```TS title="Menu.tsx"
import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { MenuSchema } from "../../types/types";

function Menu() {
  // highlight-next-line
  const menu = useLoaderData(); //这里menu是unknown

  const result = MenuSchema.safeParse(menu);

  if (!result.success) return null;
  // correct next line
  const validateMenu = result.data;  //这里validateMenu的type就变成Pizza[]

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {validateMenu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}
```
