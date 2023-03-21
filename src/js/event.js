function reverseList(arr) {
  return [...arr].reverse();
}

console.log(reverseList([])); // []
console.log(reverseList([1, 2, 3])); // [3, 2, 1]
