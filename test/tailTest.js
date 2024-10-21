const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ["yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

const words1 = tail([1]);
assertEqual(words1.length, 0);

const words2 = tail(["Howdy", "Lighthouse", "Labs"]);
assertEqual(words2.length, 2);

const words3 = tail([]);
assertEqual(words3.length, 0);

assertEqual(words2[0], "Lighthouse");