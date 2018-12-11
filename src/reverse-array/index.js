'use strict';

const reverse = (array) => {
  let last = array.length;
  const reversed = [];

  for (let i = array.length; i > 0; i--) {
    reversed.push(last--);
  }
  return reversed;
};

module.exports = reverse;
