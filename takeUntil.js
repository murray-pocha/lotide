const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');


const takeUntil = function(array, callback) {
  const result = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    result.push(item);
  }
  return result;
};

const array = [1, 2, 3, 3, 6, 0, 9, 7, -8];
const results = takeUntil(array, (x) => x < 0);
console.log(results);

const array1 = ['hello', 'I', 'will', 'stop', 'at', 'the', 'comma', ',', 'no', 'more'];
const results1 = takeUntil(array1, (x) => x === ',');
console.log(results1);