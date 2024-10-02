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

const assertArraysEqual = function(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);

  if (!isEqual) {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
    return;
  }

  console.log(`🟢🟢🟢 Assertion passed: ${arr1} === ${arr2}`);

};

const flatten = function(arr1) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i])) {
      for (let j = 0; j < arr1[i].length; j++) {
        result.push(arr1[i][j]);
      }
    } else {
      result.push(arr1[i]);
    }
  }
  return result;
};

let result = flatten([1, 2, 3, [4, 5], 6]);
console.log(result);

console.log(flatten([[1, 2], [3, 4], [5, 6]]));

