function dominator(arr) {
  let dominates = null;

  const counts = arr.reduce((count, el) => {
    count[el] = (count[el] || 0) + 1;
    return count;
  }, {});

  for (let key in counts) {
    if (counts[key] > (counts[dominates] || 0)) dominates = Number(key);
  }

  return counts[dominates] > Math.floor(arr.length / 2) ? dominates : -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3])); // 3
console.log(dominator([1, 2, 3, 4, 5])); // -1
console.log(dominator([1, 1, 1, 2, 2, 2])); // -1
console.log(dominator([1, 1, 1, 2, 2, 2, 2])); // 2
