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

function assertArraysEqual(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);

  if (isEqual) {
    console.log(`🟢🟢🟢 Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1, 2, 3], [5, 7, 8]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);

const middle = function(array) {
  let result = [];

  if (array.length <= 2) {
    return result;
  }

  if (array.length % 2 !== 0) {
    const midIndex = Math.floor(array.length / 2);
    result.push(array[midIndex]);

  } else {
    const midIndex1 = (array.length / 2) - 1;
    const midIndex2 = array.length / 2;
    result.push(array[midIndex1], array[midIndex2]);
  }

  return result;
};

console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));