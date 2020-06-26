# Debuggercises 

> 6/26/2020, 2:47:22 PM 

## [exercises](../../README.md)/[05-functions-101](../README.md)/1-scrambles 

- [/1-write-expected.js](#1-write-expectedjs) - _pass_ 
- [/2-write-arguments.js](#2-write-argumentsjs) - _pass_ 
- [/3-write-function.js](#3-write-functionjs) - _pass_ 
---

## /1-write-expected.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/1-write-expected.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
"use strict";

const scramble = (param1, param2, param3) => {
  return `${param3}${param1}${param2}`;
};

const _1_expect = "bac";
const _1_actual = scramble("a", "c", "b");
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = "cab";
const _2_actual = scramble("a", "b", "c");
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = "acb";
const _3_actual = scramble("c", "b", "a");
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = "cba";
const _4_actual = scramble("b", "a", "c");
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = "abc";
const _5_actual = scramble("b", "c", "a");
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = "bca";
const _6_actual = scramble("c", "a", "b");
console.assert(_6_actual === _6_expect, "Test 6");

```

[TOP](#debuggercises)

---

## /2-write-arguments.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/2-write-arguments.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
```

```js
"use strict";

const scramble = (param1, param2, param3) => {
  return `${param1}${param3}${param2}`;
};

const _1_expect = "cab";
const _1_arg_1 = "c";
const _1_arg_2 = "b";
const _1_arg_3 = "a";
const _1_actual = scramble(_1_arg_1, _1_arg_2, _1_arg_3);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = "abc";
const _2_arg_1 = "c";
const _2_arg_2 = "b";
const _2_arg_3 = "a";
const _2_actual = scramble(_2_arg_3, _2_arg_1, _2_arg_2);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = "abc";
const _3_arg_1 = "b";
const _3_arg_2 = "a";
const _3_arg_3 = "c";
const _3_actual = scramble(_3_arg_2, _3_arg_3, _3_arg_1);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = "cba";
const _4_arg_1 = "c";
const _4_arg_2 = "a";
const _4_arg_3 = "b";
const _4_actual = scramble(_4_arg_1, _4_arg_2, _4_arg_3);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = "abc";
const _5_arg_1 = "c";
const _5_arg_2 = "a";
const _5_arg_3 = "b";
const _5_actual = scramble(_5_arg_2, _5_arg_1, _5_arg_3);
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = "bac";
const _6_arg_1 = "b";
const _6_arg_2 = "c";
const _6_arg_3 = "a";
const _6_actual = scramble(_6_arg_1, _6_arg_2, _6_arg_3);
console.assert(_6_actual === _6_expect, "Test 6");

```

[TOP](#debuggercises)

---

## /3-write-function.js 

> pass 
>
> [review source](../../../exercises/05-functions-101/1-scrambles/3-write-function.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
```

```js
"use strict";

const scramble = (param1, param2, param3) => {
  return `${param3}${param1}${param2}`;
};

const _1_expect = "yxz";
const _1_actual = scramble("x", "z", "y");
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = "zxy";
const _2_actual = scramble("x", "y", "z");
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = "yzx";
const _3_actual = scramble("z", "x", "y");
console.assert(_3_actual === _3_expect, "Test 3");

```

[TOP](#debuggercises)

