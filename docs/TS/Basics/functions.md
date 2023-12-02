---
sidebar_position: 5
---

# Functions 函数

TS 中，函数要写明参数与返回值的类型。

## Parameter 参数类型

写明参数类型，TS 会进行内置检查，如 method 是否适用于该参数等。

```TS
// correct next line
function add (a:number,b:number) {
    return a+b;
}

function add(a:number) {
  // Property 'split' does not exist on type 'number'.
  // error next line
    return a.split("");
}
```

## Parameter 参数进阶

参数还包括可选参数，必选参数需要在可选参数左侧。当我们没有按照要求传入参数的时候会报错。

```TS
// correct next line
function add(a:number, b?:string, c?:boolean, ...rest:number[]):number {
    return 100;
}
// error-start
const result1 = add(1,2,3,4);  // b should be string

const result2 = add(1,"",3,4); // c should be boolean

const result3 = add(1,"",true,""); // rest should be all number
// error-end
```

## Return Value 返回值类型

函数返回值也应该注明类型，既能防止出错

```TS
function add (a:number,b:number):void {
  // Type 'number' is not assignable to type 'void'.
  //error next line
  return a+b;
}
```
