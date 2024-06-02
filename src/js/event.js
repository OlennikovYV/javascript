function countAdjacentPairs(searchString) {
  return (searchString.match(/(\b\w+\s*\b)\1+/gi) || []).length;
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
