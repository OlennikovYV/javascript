function* rangeGenerator(min, max, step) {
  while (min <= max) {
    yield min;
    min += step;
  }
}

function generateRange(min, max, step) {
  return [...rangeGenerator(min, max, step)];
}

console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
console.log(generateRange(1, 10, 4)); // [1, 5, 9]
console.log(generateRange(1, 10, 5)); // [1, 6]
