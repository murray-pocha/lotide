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

const without = function(items, itemsToRemove) {
  let result = [];

  for (const item of items) {
    // console.log(item, itemsToRemove);

    // this is a filter
    if (itemsToRemove.includes(item)) {
      // console.log("was not found")
      continue;
    }

    // happy path (this is the one we want)
    result.push(item);
  }

  return result;
};

let result = without([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual(result, [4]);
console.log(result);
