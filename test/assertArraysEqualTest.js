const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

assertArraysEqual([1, 2, 3], [5, 7, 8]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);