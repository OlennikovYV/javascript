function isNice(arr) {
  return (
    Boolean(arr.length) &&
    arr.every(el => arr.includes(el - 1) || arr.includes(el + 1))
  );
}

console.log(isNice([2, 10, 9, 3])); // true
console.log(isNice([3, 4, 5, 7])); // false
console.log(isNice([])); // false
