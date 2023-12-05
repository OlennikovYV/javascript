function group(arr) {
  const countDuplicates = {};
  const orderList = [...new Set(arr)];

  arr.reduce((duplicates, digit) => {
    duplicates[digit] = (duplicates[digit] || 0) + 1;
    return duplicates;
  }, countDuplicates);

  return orderList.map(element =>
    Array.from({ length: countDuplicates[element] }, _ => element)
  );
}

console.log(group([3, 2, 6, 2, 1, 3]));
// [[3, 3], [2, 2], [6], [1]]
console.log(group([3, 2, 6, 2]));
// [[3], [2, 2], [6]]
