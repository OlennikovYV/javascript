function group(arr) {
  return [...new Set(arr)].map(digit => arr.filter(el => el === digit));
}

console.log(group([3, 2, 6, 2, 1, 3]));
// [[3, 3], [2, 2], [6], [1]]
console.log(group([3, 2, 6, 2]));
// [[3], [2, 2], [6]]
