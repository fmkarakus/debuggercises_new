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
