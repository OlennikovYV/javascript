const findAll = (array, n) => {
  const result = [];

  return array.reduce((res, digit, index) => {
    if (digit === n) res.push(index);
    return res;
  }, result);
};

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3)); // [2, 4]);
console.log(findAll([10, 16, 20, 6, 14, 11, 20, 2, 17, 16, 14], 16));
// [1, 9]
console.log(
  findAll(
    [
      20, 20, 10, 13, 15, 2, 7, 2, 20, 3, 18, 2, 3, 2, 16, 10, 9, 9, 7, 5, 15,
      5,
    ],
    20
  )
); // [0, 1, 8]
