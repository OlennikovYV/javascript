function consecutive(arr) {
  if (arr.length < 2) return 0;

  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let result = 0;

  for (let i = min; i <= max; i += 1) if (!arr.includes(i)) result += 1;

  return result;
}

console.log(consecutive([4, 8, 6])); // 2
console.log(consecutive([1, 2, 3, 4])); // 0
console.log(consecutive([])); // 0
console.log(consecutive([1])); // 0
