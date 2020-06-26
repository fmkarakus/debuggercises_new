# Debuggercises 

> 6/26/2020, 2:54:11 PM 

## [exercises](../../README.md)/[12-functions-301](../README.md)/1-fill-in-the-blanks 

- [/1-write-tests.js](#1-write-testsjs) - _pass_ 
- [/2-write-tests.js](#2-write-testsjs) - _pass_ 
- [/3-pass-tests.js](#3-pass-testsjs) - _pass_ 
- [/4-pass-tests.js](#4-pass-testsjs) - _pass_ 
---

## /1-write-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/1-write-tests.js)

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

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange numbers like
//  NaN, Infinity, -0.0, 1.0003, -Infinity, -NaN, ...

/**
 * adds two numbers together
 * @param {number} x
 * @param {number} y
 * @returns {number} the sum of x and y
 */
const add = (x, y) => {
  if (typeof x !== "number") {
    throw new TypeError("x");
  }
  if (typeof y !== "number") {
    throw new TypeError("y");
  }

  const result = x + y;

  if (typeof result !== "number") {
    throw new TypeError("result");
  }
  return result;
};

const _1_expect = 5;
const _1_actual = add(2, 3);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = Infinity;
const _2_actual = add(Infinity, 5);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = 2;
const _3_actual = add(0.5, 1.5);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = 0;
const _4_actual = add(-0.0, 0);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = 0.09999999999999998;
const _5_actual = add(-0.2, 0.3);
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = 1;
const _6_actual = add(2 / 7, 5 / 7);
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = 0.5;
const _7_actual = add(2 / 7, 1.5 / 7);
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = -Infinity;
const _8_actual = add(-Infinity, 0);
console.assert(_8_actual === _8_expect, "Test 8");

const _9_expect = -4;
const _9_actual = add(1, -5);
console.assert(_9_actual === _9_expect, "Test 9");

```

[TOP](#debuggercises)

---

## /2-write-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/2-write-tests.js)

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

// fill in the blanks to write 9 passing test cases for this function
// be curious!  what happens if you use strange values?

/**
 * compares the type and value of two parameters
 * @param {any} a
 * @param {any} b
 * @returns {boolean} result of the comparison
 */
const strictEqual = (a, b) => {
  // no need to check a or b, they can be any type

  const result = a === b;

  if (typeof result !== "boolean") {
    throw new TypeError("result");
  }
  return result;
};

const _1_expect = true;
const _1_actual = strictEqual(5, 5);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = false;
const _2_actual = strictEqual("5", 5);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = false;
const _3_actual = strictEqual(NaN, NaN);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = true;
const _4_actual = strictEqual(Infinity, 5 / 0);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = true;
const _5_actual = strictEqual(-Infinity, -5 / 0);
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = false;
const _6_actual = strictEqual(null, 0);
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = false;
const _7_actual = strictEqual(undefined, 0 / 0);
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = false;
const _8_actual = strictEqual(NaN, 0 / 0);
console.assert(_8_actual === _8_expect, "Test 8");

const _9_expect = false;
const _9_actual = strictEqual("null", null);
console.assert(_9_actual === _9_expect, "Test 9");

```

[TOP](#debuggercises)

---

## /3-pass-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/3-pass-tests.js)

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

// write the logic to pass these tests

/**
 * checks if two values have the same truthiness
 * @param {any} a
 * @param {any} b
 * @returns {boolean}
 */
const sameTruthiness = (a, b) => {
  // no need to check a or b, they can be any type

  const result = !!a === !!b;

  if (typeof result !== "boolean") {
    throw new TypeError("result");
  }
  return result;
};

const _1_expect = false;
const _1_actual = sameTruthiness(1, 0);
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = false;
const _2_actual = sameTruthiness("", " ");
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = false;
const _3_actual = sameTruthiness(null, "null");
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = false;
const _4_actual = sameTruthiness(false, -Infinity);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = false;
const _5_actual = sameTruthiness(NaN, "false");
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = true;
const _6_actual = sameTruthiness(2, "2");
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = true;
const _7_actual = sameTruthiness("true", true);
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = true;
const _8_actual = sameTruthiness(-1, 1);
console.assert(_8_actual === _8_expect, "Test 8");

const _9_expect = true;
const _9_actual = sameTruthiness("hi!", "bye :(");
console.assert(_9_actual === _9_expect, "Test 9");

```

[TOP](#debuggercises)

---

## /4-pass-tests.js 

> pass 
>
> [review source](../../../exercises/12-functions-301/1-fill-in-the-blanks/4-pass-tests.js)

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

// write the logic to pass the tests
// describe the function's behavior in the comment

/**
 * checks whether the variable is NaN
 * @param {any} a
 * @returns {boolean}
 */
const mystery = (a) => {
  // no need to check a , they can be any type

  const result = isNaN(a);

  if (typeof result !== "boolean") {
    throw new TypeError("result");
  }
  return result;
};

const _1_expect = false;
const _1_actual = mystery("1");
console.assert(_1_actual === _1_expect, "Test 1");

const _2_expect = false;
const _2_actual = mystery(true);
console.assert(_2_actual === _2_expect, "Test 2");

const _3_expect = false;
const _3_actual = mystery(null);
console.assert(_3_actual === _3_expect, "Test 3");

const _4_expect = false;
const _4_actual = mystery(8.5);
console.assert(_4_actual === _4_expect, "Test 4");

const _5_expect = false;
const _5_actual = mystery("Infinity");
console.assert(_5_actual === _5_expect, "Test 5");

const _6_expect = false;
const _6_actual = mystery("");
console.assert(_6_actual === _6_expect, "Test 6");

const _7_expect = true;
const _7_actual = mystery(undefined);
console.assert(_7_actual === _7_expect, "Test 7");

const _8_expect = true;
const _8_actual = mystery("four");
console.assert(_8_actual === _8_expect, "Test 8");

const _9_expect = true;
const _9_actual = mystery("hi!");
console.assert(_9_actual === _9_expect, "Test 9");

```

[TOP](#debuggercises)

