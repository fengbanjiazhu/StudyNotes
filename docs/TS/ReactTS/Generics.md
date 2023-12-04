---
sidebar_position: 2
---

# React + Generics

根据 type 的设置，要求传入的必需是同类型.如传入 String，那么 countHistory 必须是 String[]

```TS title="ButtonExample.tsx"
type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export default function ButtonExample<T>({ countValue, countHistory }: ButtonProps<T>) {
  console.log(countValue, countHistory);
  return <button>Click</button>;
}
```

```TS title="App.tsx"
import ButtonExample from "./components/ButtonExample";

export default function App() {
  return (
    <div>
      // correct next line
      <ButtonExample countValue={1} countHistory={[1, 2, 3]}></ButtonExample>

      // error next line
      <ButtonExample countValue={true} countHistory={[1, 2, 3]}></ButtonExample>
      // should be boolean and boolean[]
    </div>
  );
}
```

### 泛型应用拓展

可以延伸 Generic 的要求，如 `T extends number | string` 。此时传入的类型必须为 number 或者 string，否则会报错

```TS title="ButtonExample.tsx"
export default function ButtonExample<T extends number | string>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  console.log(countValue, countHistory);
  return <button>Click</button>;
}
```
