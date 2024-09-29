const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } 
  else {
   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  return array.slice(1);
};

const words = ["yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const words1 = tail([1]);
assertEqual(words1.length, 0);

const words2 = tail(["Howdy", "Lighthouse", "Labs"]);
assertEqual(words2.length, 2);