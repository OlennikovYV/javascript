function nextId(ids) {
  const sortArray = [...new Set(ids)].sort((a, b) => a - b);
  let minID = sortArray[sortArray.length - 1] + 1;

  for (let i = 0; i < sortArray.length; i += 1)
    if (sortArray[i] !== i) return i;

  return minID;
}

console.log(nextId([0, 1, 2, 3, 5])); // 4
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11
console.log(nextId([1, 2, 0, 2, 3, 5])); // 4

console.log(nextId([1, 1, 3, 3, 4, 4, 6, 9])); // 0
console.log(nextId([2, 4, 6, 9, 9, 9, 9, 9])); // 0
