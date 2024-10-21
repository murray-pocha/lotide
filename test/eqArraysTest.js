const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 3, 5]), false);