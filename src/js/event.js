function alternateSqSum(arr) {
  return arr.reduce((sum, digit, i) => {
    const add = (i + 1) % 2 ? digit : digit ** 2;
    return sum + add;
  }, 0);
}

console.log(alternateSqSum([])); // 0
console.log(alternateSqSum([1, 2, 3, 4, 5])); // 29
console.log(alternateSqSum([-1, 0, -3, 0, -5, 3])); // 0
console.log(alternateSqSum([-1, 2, -3, 4, -5])); // 11
