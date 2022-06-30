function pickIt(arr) {
  var odd = [],
    even = [];
  for (let i = 0; i < arr.length; i += 1) {
    const digit = arr[i];
    if (digit % 2 === 0) {
      even.push(digit);
    } else {
      odd.push(digit);
    }
  }

  return [odd, even];
}

console.dir(pickIt([1, 2])); // [[1], [2]]
console.dir(pickIt([1, 2, 3])); // [[1, 3], [2]]
console.dir(pickIt([3, 2, 1])); // [[3, 1], [2]]
console.dir(pickIt([10, 20, 30])); // [[], [10, 20, 30]]
console.dir(pickIt([11, 21, 31])); // [[11, 21, 31], []]
console.dir(pickIt([8, 1, 5, 4, 6, 1, 1])); // [[1, 5, 1, 1], [8, 4, 6]]
console.dir(pickIt([75, 91, 5, 45])); // [[1, 5, 1, 1], [8, 4, 6]]
