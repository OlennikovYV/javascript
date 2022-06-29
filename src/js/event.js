reverse = function (array) {
  const result = [];

  for (let i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }

  return result;
};

console.log(reverse([1, 2, 3])); // [3, 2, 1]
console.log(reverse([1, null, 14, 'two'])); // ['two', 14, null, 1]
