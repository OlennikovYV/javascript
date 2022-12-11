function bingo(a) {
  return [2, 9, 14, 7, 15].every(num => a.includes(num)) ? 'WIN' : 'LOSE';
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 'LOSE'
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10])); // 'WIN'
