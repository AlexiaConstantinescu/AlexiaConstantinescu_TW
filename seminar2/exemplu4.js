const intercaleaza = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return null;
  }

  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i], arr2[i]);
  }

  return result;
};
console.log(intercaleaza([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]
console.log(intercaleaza(["a", "c", "e"], ["b", "d", "f"])); // ["a", "b", "c", "d", "e", "f"]
console.log(intercaleaza([1, 2], [3])); // null (lungimi diferite)
