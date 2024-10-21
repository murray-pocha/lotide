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

module.exports = middle;