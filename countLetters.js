const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  }
  else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(sentence) {
  const result = {};
  for (const item of sentence) {
    if (item === " ") {
      continue;
    }

    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
};

const result = countLetters("Hope this works!");
assertEqual(result["o"], 2);
assertEqual(result["p"], 1);