
function assertArraysEqual(arr1, arr2) {
  const isEqual = eqArrays(arr1, arr2);

  if (isEqual) {
    console.log(`🟢🟢🟢 Assertion passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion failed: ${arr1} !== ${arr2}`);
  }
}


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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char === " ") {
      continue;
    }

    if (!results[char]) {
      results[char] = [];

    }

    results[char].push(i);
  }

  return results;

};


assertArraysEqual(letterPositions("Hello").o, [4]);
const results = letterPositions("I will understand this!!");
console.log(results);



















