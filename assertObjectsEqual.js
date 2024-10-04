
function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}


const eqObjects = function(object1, object2) {

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const keys of keys1) {
    const value1 = object1[keys];
    const value2 = object2[keys];

    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;

  if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const shoes = { shoecolor: "black", shoesize: 10 };
const shoes2 = { shoecolor: "black", shoesize: 10 };
assertObjectsEqual(shoes, shoes2);

const sandals = { shoecolor: "black", shoesize: 10, shoetype: "sandal" };
assertObjectsEqual(shoes, sandals);



const cars = { carcolors: ["black", "red"], cartype: "truck" };
const cars2 = { carcolors: ["black", "red"], cartype: "truck" };
assertObjectsEqual(cars, cars2);