'use strict';

const deleteDuplicates = (array) => {
  // assuming sort is worst-case O(n^2)
  array.sort();
  const outputArray = [];

  // iterate over the input and test values against the last element of the output array...
  // O(n)
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== outputArray[outputArray.length - 1]) {
      outputArray.push(array[i]);
    }
  }
  return outputArray;
};

module.exports = deleteDuplicates;
