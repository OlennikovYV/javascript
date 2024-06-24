const lengthOfSequence = function (arr, n) {
  const beginPart = arr.indexOf(n);
  const endPart = arr.lastIndexOf(n);
  const countN = arr.filter(el => el == n).length;

  return beginPart == -1 || endPart == -1 || beginPart == endPart || countN > 2
    ? 0
    : endPart - beginPart + 1;
};

console.log(lengthOfSequence([1], 0)); // 0
console.log(lengthOfSequence([1], 1)); // 0
console.log(lengthOfSequence([1, 1], 1)); // 2
console.log(lengthOfSequence([1, 2, 3, 1], 1)); // 4
console.log(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5)); // 5
console.log(lengthOfSequence([-7, 6, 2, -7, 4], -7)); // 4
console.log(lengthOfSequence([-7, 3, -7, -7, 2, 1], -7)); // 0
