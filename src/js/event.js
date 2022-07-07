function highestRank(arr) {
  const countDigit = digit => arr.filter(el => el === digit).length;
  return arr.sort((a, b) => countDigit(b) - countDigit(a) || b - a)[0];
}

let arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr)); // 12
arr = [1, 1, 2, 2, 3, 3, 4, 4, 7];
console.log(highestRank(arr)); // 12
