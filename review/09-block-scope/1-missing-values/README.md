# Debuggercises 

> 6/23/2020, 5:54:01 PM 

## [exercises](../../README.md)/[09-block-scope](../README.md)/1-missing-values 

- [/1.js](#1js) - _pass_ 
- [/2.js](#2js) - _pass_ 
---

## /1.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/1-missing-values/1.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
"use strict";

const a = 3;
console.assert(a === 3, "Test 1");
{
  const a = 5;
  console.assert(a === 5, "Test 2");
}
console.assert(a === 3, "Test 3");

```

[TOP](#debuggercises)

---

## /2.js 

> pass 
>
> [review source](../../../exercises/09-block-scope/1-missing-values/2.js)

```txt
+ PASS: Test 1: x
+ PASS: Test 2: x
+ PASS: Test 3: y
+ PASS: Test 4: x
```

```js
"use strict";

let x = 3;
console.assert(x === 3, "Test 1: x");
{
  x = 10;
  const y = 5;

  console.assert(x === 10, "Test 2: x");
  console.assert(y === 5, "Test 3: y");
}
console.assert(x === 10, "Test 4: x");

```

[TOP](#debuggercises)

