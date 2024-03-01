function maxAndMin(arr1, arr2) {
  let maxDiff = Number.MIN_SAFE_INTEGER;
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const diff = Math.abs(arr1[i] - arr2[j]);

      if (diff > maxDiff) maxDiff = diff;
      if (diff < minDiff) minDiff = diff;
    }
  }

  return [maxDiff, minDiff];
}

console.log(maxAndMin([3, 10, 5], [20, 7, 15, 8])); // [17, 2]
console.log(maxAndMin([3], [20])); // [17, 17]
console.log(maxAndMin([3, 10, 5], [3, 10, 5])); // [7, 0]
console.log(maxAndMin([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])); // [9, 1]
