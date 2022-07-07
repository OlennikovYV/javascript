function highestRank(arr) {
  let countDigit = {};
  let maxCount = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i += 1) {
    const digit = arr[i];
    if (countDigit[digit]) {
      countDigit[digit] += 1;
    } else countDigit[digit] = 1;
  }

  for (let key in countDigit) {
    if (countDigit[key] > maxCount) maxCount = countDigit[key];
  }

  for (let key in countDigit) {
    if (countDigit[key] === maxCount) {
      if (Number(key) > result) result = Number(key);
    }
  }

  return result;
}

let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr)); // 12
arr = [1, 1, 2, 2, 3, 3, 4, 4, 7];
console.log(highestRank(arr)); // 12
