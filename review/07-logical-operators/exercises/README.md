# Debuggercises 

> 6/23/2020, 5:54:01 PM 

## [exercises](../../README.md)/[07-logical-operators](../README.md)/exercises 

- [/and.js](#andjs) - _pass_ 
- [/not.js](#notjs) - _pass_ 
- [/or.js](#orjs) - _pass_ 
---

## /and.js 

> pass 
>
> [review source](../../../exercises/07-logical-operators/exercises/and.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
"use strict";

// write a function that behaves the same as &&
//  ... without using &&, only using ? :
const and = (left, right) => {
  return left ? right : left;
};

const _1_expect = 0;
const _1_actual = and(0, 0);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = 0;
const _2_actual = and(1, 0);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = 0;
const _3_actual = and(0, 1);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = 1;
const _4_actual = and(1, 1);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = "";
const _5_actual = and("", "asdf");
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = "";
const _6_actual = and("asdf", "");
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = false;
const _7_actual = and(true, false);
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = NaN;
const _8_actual = and(NaN, undefined);
console.assert(Object.is(_8_actual, _8_expect), "Test 8");

const _9_expect = "asdf";
const _9_actual = and(Infinity, "asdf");
console.assert(_9_actual === _9_expect, "Test 9");

```

[TOP](#debuggercises)

---

## /not.js 

> pass 
>
> [review source](../../../exercises/07-logical-operators/exercises/not.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
"use strict";

// write a function that behaves the same as !
//  ... but doesn't use !, only using ? :
const not = (value) => {
  return value ? false : true;
};

const _1_expect = true;
const _1_actual = not(0);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = true;
const _2_actual = not(false);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = true;
const _3_actual = not(undefined);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = true;
const _4_actual = not(null);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = true;
const _5_actual = not("");
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = true;
const _6_actual = not(NaN);
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = false;
const _7_actual = not("fdsa");
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = false;
const _8_actual = not("true");
console.assert(_8_actual === _8_expect, "Test 8");

const _9_expect = false;
const _9_actual = not(1);
console.assert(_9_actual === _9_expect, "Test 9");

```

[TOP](#debuggercises)

---

## /or.js 

> pass 
>
> [review source](../../../exercises/07-logical-operators/exercises/or.js)

```txt
+ PASS: Test 1
+ PASS: Test 2
+ PASS: Test 3
+ PASS: Test 4
+ PASS: Test 5
+ PASS: Test 6
+ PASS: Test 7
+ PASS: Test 8
+ PASS: Test 9
```

```js
"use strict";

// write a function that behaves the same as ||
//  ... without using ||, only using ? :
const or = (left, right) => {
  return left ? left : right;
};

const _1_expect = 0;
const _1_actual = or(0, 0);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = 1;
const _2_actual = or(1, 0);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = 1;
const _3_actual = or(0, 1);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = 1;
const _4_actual = or(1, 1);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = "asdf";
const _5_actual = or("", "asdf");
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = "asdf";
const _6_actual = or("asdf", "");
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = true;
const _7_actual = or(true, false);
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = undefined;
const _8_actual = or(NaN, undefined);
console.assert(_8_actual === _8_expect, "Test 8");

const _9_expect = Infinity;
const _9_actual = or(Infinity, "asdf");
console.assert(_9_actual === _9_expect, "Test 9");

```

[TOP](#debuggercises)

