// Credit - Stephen Grider - Coding Interview Bootcamp.

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }

  const center = Math.floor(array.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(center);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    const results = [];

    while (left.length && right.length) {
      if (left[0] < right[0]) {
        results.push(left.shift());
      } else {
        results.push(right.shift());
      }
    }

    return [...results, ...left, ...right];
  }
};
