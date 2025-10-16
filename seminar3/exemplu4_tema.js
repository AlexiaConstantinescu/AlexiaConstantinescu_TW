const reduce = (array, reducer, initialValue) => {
  let accumulator = initialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < array.length; i++) {
    accumulator = reducer(accumulator, array[i]);
  }

  return accumulator;
};

const sampleArray = [1, 2, 3, 4, 5];

const sum = reduce(sampleArray, (acc, cur) => acc + cur, 0);
console.log(sum); // 15

const product = reduce(sampleArray, (acc, cur) => acc * cur);
console.log(product); // 120
