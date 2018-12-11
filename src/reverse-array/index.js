'use strict';

const reverse = (array) => {
  let last = array.length;
  const reversed = [];

  for (let i = 0; i < array.length; i++) {
    reversed.push(last--);
  }
  return reversed;
};

module.exports = reverse;
