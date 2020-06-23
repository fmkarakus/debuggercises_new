"use strict";

<<<<<<< HEAD
let global = "awesome";

function funk() {
  const local = "funky";
  global = `#${global}`;
  return `${local} ${global}`;
}

const funkReturn1 = funk();
const funkTest1 = funkReturn1 === "funky #awesome";
console.assert(funkTest1, "Test 1: funk");
=======
let global = 'turtle';

const jazz = () => {
  const local = 'jazzy'
  global = `${global}!`;
  return `${global} ${local}`;
};

const jazzReturn1 = jazz();
const jazzTest1 = jazzReturn1 === _;
console.assert(jazzTest1, 'Test 1: jazz');
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b

const globalTest1 = global === "#awesome";
console.assert(globalTest1, "Test 2: global");

global = `!`;

const globalTest2 = global === "#awesome!";
console.assert(globalTest2, "Test 3: global");

<<<<<<< HEAD
const funkReturn2 = funk();
const funkTest2 = funkReturn2 === "funky ##awesome!";
console.assert(funkTest2, "Test 4: funk");
=======
const jazzReturn2 = jazz();
const jazzTest2 = jazzReturn2 === _;
console.assert(jazzTest2, 'Test 4: jazz');
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b

const globalTest3 = global === "##awesome!";
console.assert(globalTest3, "Test 5: global");

<<<<<<< HEAD
global = ":(";
=======
global = `_${global}_`;
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b

const globalTest4 = global === ":(";
console.assert(globalTest4, "Test 6: global");

<<<<<<< HEAD
const funkReturn3 = funk();
const funkTest3 = funkReturn3 === "funky #:(";
console.assert(funkTest3, "Test 7: funk");
=======
const jazzReturn3 = jazz();
const jazzTest3 = jazzReturn3 === _;
console.assert(jazzTest3, 'Test 7: jazz');
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b

const globalTest5 = global === "#:(";
console.assert(globalTest5, "Test 8: global");

<<<<<<< HEAD
global = "bye!";
=======
global = `${global}. bye!`;
>>>>>>> d2b3273faf85cb0309b00dd3a1ba80ae952ac23b

const globalTest6 = global === "bye!";
console.assert(globalTest6, "Test 9: global");
