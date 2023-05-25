function double(array) {
  return array.map(num => num * 2);
}

const test1 = [1, 2, 3, 4, 5];
const test2 = [71, -548, 12.3, 31415];

console.log(double(test1)); // [2, 4, 6, 8, 10]
console.log(double(test2)); // [142, -1096, 24.6, 62830]
