const intDiff = (arr, n) => {
  let count = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j += 1) {
      const diff = Math.abs(arr[i] - arr[j]);
      if (diff === n) count += 1;
    }
  }

  return count;
};

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)); // 3
console.log(intDiff([1, 1, 3, 3], 2)); // 4
console.log(intDiff([1, 6, 2, 3, 7, 8, 7], 0)); // 1
