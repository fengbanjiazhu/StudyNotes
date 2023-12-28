---
sidebar_position: 7
---

# if-then 条件逻辑

类似于 JS 中的 `if...else`，运算逻辑几乎没有差别。

```Java
public class Hello {
    public static void main(String[] args) {
        boolean isAlien = false;

        if(!isAlien) {
            System.out.println("Hello Alien");
        }
        // what if no code block ↓

        if(isAlien)
            System.out.println("This line would not print");
        System.out.println("But this line will");
    }
}
```
