function getAverage(marks) {
  const sum = marks.reduce((sum, mark) => sum + mark);

  return Math.floor(sum / marks.length);
}

console.log(getAverage([2, 2, 2, 2])); // 2
console.log(getAverage([1, 2, 3, 4, 5])); // 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1
