const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(object, value) {

  for (const key in object) {
    if (object[key] === value)

      return key;
  }
  return undefined;
};



const myObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 'hello'
};

assertEqual(findKeyByValue(myObj, 2), "b");
assertEqual(findKeyByValue(myObj, 3), "c");
assertEqual(findKeyByValue(myObj, 'hello'), "d");
