// Sum 3: Given an array of distinct integers, find a triplet (set of 3 numbers) that sums to zero.

const sum3isZero = (array) => {
  const map = {};

  for (let num of array) {
    if (!map[num]) {
      map[num] = 1;
    } else {
      map[num]++;
    }
  }

  let zero = false;
  let negative = false;
  let positive = false;
  let number;

  for (let int in map) {
    // is there a zero in the array?
    if (int === '0') {
      // console.log('int in zero', int)
      zero = true;
    }
    // is there a negative number?
    // Math.sign returns 1 OR -1
    if (Math.sign(int) === -1) {
      negative = true;
      number = Math.abs(int);
    }
    // is there an opposite positive?
    if (number) {
      positive = true;
    }
  }

  if (zero === true && negative === true && positive === true) {
    return true;
  }
  return false;
};
