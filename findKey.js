const assertEqual = require('./assertEqual');

const findKey = function(obj, callback) {
  for (let key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }

};

const names = {
  'Bill': {sports: 4},
  'Jim' : {sports: 1},
  'Bob' : {sports: 2},
  'Fred': {sports: 3}
};

assertEqual(findKey(names, x => x.sports === 1), 'Jim');
assertEqual(findKey(names, x => x.sports === 3), 'Fred');
assertEqual(findKey(names, x => x.sports !== 4), 'Jim');