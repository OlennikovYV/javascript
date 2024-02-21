function median(array) {
  const halfLength = Math.floor(array.length / 2);
  const sortList = [...array].sort((a, b) => a - b);

  if (array.length % 2 === 0)
    return (sortList[halfLength - 1] + sortList[halfLength]) / 2;

  return sortList[halfLength];
}

console.log(median([3, 50])); // 26.5
console.log(median([3, 2, 1])); // 2
console.log(median([33, 99, 100, 30, 29, 50])); // 41.5
