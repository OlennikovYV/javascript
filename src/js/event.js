function findLongest(array) {
  return array.reduce((resNum, num) => {
    return String(resNum).length < String(num).length ? num : resNum;
  });
}

console.log(findLongest([1, 10, 100])); // 100
console.log(findLongest([9000, 8, 800])); // 9000
console.log(findLongest([8, 900, 500])); // 900
console.log(findLongest([122248, 55056, 222894, 195426, 122292])); // 122248
