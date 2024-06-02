function countAdjacentPairs(searchString) {
  let countPairs = 0;
  let countsDuplicate = 0;
  let currentDuplicate = '';
  const words = searchString.match(/(\b\w+\b)/g) || [];

  for (let i = 0; i < words.length; i++) {
    let a = words[i].toLowerCase();
    if (a == currentDuplicate) {
      countsDuplicate++;
    } else {
      currentDuplicate = a;
      if (countsDuplicate > 0) {
        countsDuplicate = 0;
        countPairs++;
      }
    }
  }

  if (countsDuplicate > 0) countPairs++;

  return countPairs;
}

console.log(countAdjacentPairs('')); // 0
console.log(countAdjacentPairs('orange Orange kiwi pineapple apple')); // 1
console.log(countAdjacentPairs('banana banana banana')); // 1
console.log(
  countAdjacentPairs(
    'banana banana banana terracotta banana terracotta terracotta pie!'
  )
); // 2
console.log(countAdjacentPairs('pineapple apple')); // 0
