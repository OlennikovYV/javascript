function findLongest(array) {
  let lengthNumbers = array.map(num => String(num).length);
  const maxLengthNumber = Math.max(...lengthNumbers);
  lengthNumbers = array.filter(num => String(num).length === maxLengthNumber);

  return lengthNumbers[0];
}

console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000
console.log(findLongest([8, 900, 500])); // 900
console.log(findLongest([122248, 55056, 222894, 195426, 122292])); // 900
