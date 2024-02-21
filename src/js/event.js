function median(array) {
  const halfLengthList = Math.floor(array.length / 2);
  const sortList = [...array].sort((a, b) => a - b);

  if (array.length % 2 === 0) {
    const firstNumber = sortList[halfLengthList - 1];
    const secondNumber = sortList[halfLengthList];

    return (firstNumber + secondNumber) / 2;
  } else {
    return sortList[halfLengthList];
  }
}

console.log(median([3, 50])); // 26.5
console.log(median([3, 2, 1])); // 2
console.log(median([33, 99, 100, 30, 29, 50])); // 41.5
