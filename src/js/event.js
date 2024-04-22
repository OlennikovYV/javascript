function minMinMax(array) {
  const smallest = Math.min.apply(null, array);
  const largest = Math.max.apply(null, array);
  let minimumAbsent = smallest;

  while (array.includes(++minimumAbsent) === true) {}

  return [smallest, minimumAbsent, largest];
}

console.log(minMinMax([-1, 4, 5, -23, 24])); // [-23, -22, 24],
console.log(minMinMax([1, 3, -3, -2, 8, -1])); // [-3, 0, 8],
console.log(minMinMax([2, -4, 8, -5, 9, 7])); // [-5, -3, 9],
