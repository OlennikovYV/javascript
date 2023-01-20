function duplicates(arr) {
  const result = [];

  arr.reduce((dupArray, digit) => {
    if (Number.isInteger(digit) || /[^\d]/.test(digit))
      dupArray[digit] = (dupArray[digit] || 0) + 1;
    if (dupArray[digit] === 2) result.push(digit);

    return dupArray;
  }, {});

  return result;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, '5']));
// [4, 3, 1]
console.log(duplicates([0, 1, 2, 3, 4, 5]));
// []

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));
// [4, 3, 1]
console.log(duplicates(['1', 2, 4, '4', 3, '3', 1, 5, 3, 3, 3, 3]));
// [3]
console.log(duplicates([1, 1, 2, 3, 4, 5, 4]));
// [1, 4]
console.log(duplicates(['zut', 'alors', 1, 2, 4, 4, 3, 3, '1', 5, 3, 'zut']));
// [4, 3, 'zut']
