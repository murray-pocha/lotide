

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const result = [];

  for (let item of array) {

    result.push(callback(item));
  }

  return result;
};

const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);

  if (isEqual) {
    console.log(`🟢🟢🟢 Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words, (word) => word.toUpperCase());
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
