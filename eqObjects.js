const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
    }
  }
  return true;
};



const shoes = { shoecolor: "black", shoesize: 10 };
const shoes2 = { shoecolor: "black", shoesize: 10 };
eqObjects(shoes, shoes2);
assertEqual(eqObjects(shoes, shoes2), true);

const sandals = { shoecolor: "black", shoesize: 10, shoetype: "sandal" };
eqObjects(shoes, sandals);
assertEqual(eqObjects(shoes, sandals), false);

const boots = { shoecolor: "black", shoesize: 9 };
eqObjects(shoes, boots);
assertEqual(eqObjects(shoes, boots), true);


// comes back false because two arrays when using the === operand will always come back false. Because they are always two different arrays.
const cars = { carcolors: ["black", "red"], cartype: "truck" };
const cars2 = { carcolors: ["black", "red"], cartype: "truck" };
eqObjects(cars, cars2);
assertEqual(eqObjects(cars, cars2), true);