---
sidebar_position: 4
---

# 控制循环

有一些语句可以控制循环，方便我们停止，或者跳出循环。

这些语句可以用在 for loop 中，也可以用在 while loop 或者 switch 中。

## break 关键字

break 主要用在`循环语句`或者 `switch 语句`中，用来**打断**循环。

使用了 break，循环就会结束，不再继续。与 JS 相同。

```Java title="Break"
int [] numbers = {10, 20, 30, 40, 50};

for(int x : numbers ) {
    if( x == 30 ) {
      // correct next line
      break;
    }
    System.out.println( x );
}

// result: 10, 20
```

```Java title="Break"
int j = 1;
boolean isFinished = true;

do {
    if (j > 5) {
        break;
    }
    System.out.println(j);
    j++;
    isFinished = (j < 10);
} while (isFinished);

// result: 1,2,3,4,5
```

## continue 关键字

continue 适用于任何循环控制结构中。作用是让程序立刻跳转到**下一次循环**的迭代。

在 for 循环中，continue 语句使程序立即跳转到`increment 更新语句`。

在 while 或者 do…while 循环中，程序立即跳转到布尔表达式的`判断语句`。

与 JS 相同。

```Java
int[] numbers = {10, 20, 30, 40, 50};

for (int x : numbers) {
    if (x == 30) {
        continue;
    }
    System.out.println(x);
}

// result: 10 20 40 50
```
