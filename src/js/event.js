function makeParts(arr, chunkSize) {
  const partsArray = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    partsArray.push(arr.slice(i, i + chunkSize));
  }

  return partsArray;
}

console.log(makeParts([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(makeParts([1, 2, 3], 1)); // [[1], [2], [3]]
console.log(makeParts([1, 2, 3, 4, 5], 10)); // [[1, 2, 3, 4, 5]]
