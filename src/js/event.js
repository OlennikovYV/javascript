function createArray(number) {
  return Array.from({ length: number }, (_, i) => i + 1);
}

console.log(createArray(1)); // [1]
console.log(createArray(2)); // [1, 2]
console.log(createArray(3)); // [1, 2, 3]
console.log(createArray(4)); // [1, 2, 3, 4]
console.log(createArray(5)); // [1, 2, 3, 4, 5]
