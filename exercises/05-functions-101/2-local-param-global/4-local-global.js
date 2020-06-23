"use strict";

<<<<<<< HEAD:exercises/05-functions-101/2-local-param-global/6-local-global.js
let global = "turtle";

function jazz() {
  const local = "jazzy";
  global = `${global}!`;
  return `${global} ${local}`;
}

const jazzReturn1 = jazz();
const jazzTest1 = jazzReturn1 === "turtle! jazzy";
console.assert(jazzTest1, "Test 1: jazz");
=======
let global = 'awesome';

const funk = () => {
  const local = 'funky'
  global = `#${global}`;
  return `${local} ${global}`;
};

const funkReturn1 = funk();
const funkTest1 = funkReturn1 === _;
console.assert(funkTest1, 'Test 1: funk');
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b:exercises/05-functions-101/2-local-param-global/4-local-global.js

const globalTest1 = global === "turtle!";
console.assert(globalTest1, "Test 2: global");

global = `${global}!`;

const globalTest2 = global === `!`;
console.assert(globalTest2, "Test 3: global");

<<<<<<< HEAD:exercises/05-functions-101/2-local-param-global/6-local-global.js
const jazzReturn2 = jazz();
const jazzTest2 = jazzReturn2 === "!! jazzy";
console.assert(jazzTest2, "Test 4: jazz");
=======
const funkReturn2 = funk();
const funkTest2 = funkReturn2 === _;
console.assert(funkTest2, 'Test 4: funk');
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b:exercises/05-functions-101/2-local-param-global/4-local-global.js

const globalTest3 = global === "!!";
console.assert(globalTest3, "Test 5: global");

global = ':(';

const globalTest4 = global === "_!!_";
console.assert(globalTest4, "Test 6: global");

<<<<<<< HEAD:exercises/05-functions-101/2-local-param-global/6-local-global.js
const jazzReturn3 = jazz();
const jazzTest3 = jazzReturn3 === "_!!_! jazzy";
console.assert(jazzTest3, "Test 7: jazz");
=======
const funkReturn3 = funk();
const funkTest3 = funkReturn3 === _;
console.assert(funkTest3, 'Test 7: funk');
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b:exercises/05-functions-101/2-local-param-global/4-local-global.js

const globalTest5 = global === "_!!_!";
console.assert(globalTest5, "Test 8: global");

global = 'bye!';

const globalTest6 = global === "_!!_!. bye!";
console.assert(globalTest6, "Test 9: global");
