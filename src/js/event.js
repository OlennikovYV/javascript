function mostFrequentItemCount(collection) {
  return collection.length
    ? Math.max(
        ...collection.map(
          number => collection.filter(num => number === num).length
        )
      )
    : 0;
}

console.log(mostFrequentItemCount([3, -1, -1])); // 2
console.log(
  mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3])
);
// 5
