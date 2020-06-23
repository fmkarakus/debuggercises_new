"use strict";

// PURE FUNCTIONS are a habit, not a language feature:
//  - only use LOCAL VARIABLES and PARAMETERS in your function body

// writing pure functions is easier to understand and debug
//  because their behavior is consistent
//  you'll get the same return value every time you use the same arguments

// you can even check if your function is pure without executing it!
// point at each variable inside the function body and ask
//  1. is this declared as a parameter?
//  2. is this declared in the body with let, const or var?
// if the answer to both functions is "no", it's not a pure function

// which of these are pure functions?

const a = () => {
  return x + y;
<<<<<<< HEAD
}
//not pure
=======
};
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b

const b = (y) => {
  result = x + y;
  return result;
<<<<<<< HEAD
}
//not pure

function c(y, x) {
  const m = y - x;
  return x + m;
}
//pure

function d(x, y) {
  const a = "hi";
  return x + y + z;
}
//not pure
=======
};

const c = (y, x) => {
  const m = y - x
  return x + m;
};

const d = (x, y) => {
  const a = 'hi';
  return x + y + z;
};
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b

const e = (x, y) => {
  p += z;
  return z + y;
<<<<<<< HEAD
}
//not pure
=======
};

const f = (p) => {
  return p * 2;
};
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b
