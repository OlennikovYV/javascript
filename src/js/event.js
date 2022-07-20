function upArray(arr) {
  let i = arr.length - 1;
  let rest = 1;

  if (arr.length === 0) return null;
  if (arr.every(digit => digit >= 0 && digit <= 9) === false) return null;

  while (i >= 0 && rest) {
    const digit = arr[i] + rest;
    arr[i] = digit > 9 ? digit - 10 : digit;
    rest = digit > 9;
    i -= 1;
  }

  if (rest) arr.unshift(1);

  return arr;
}

console.log(upArray([9, 9, 9])); // [1, 0, 0, 0]
console.log(upArray([2, 3, 9])); // [2, 4, 0]
console.log(upArray([4, 3, 2, 5])); // [4, 3, 2, 6]
console.log(upArray([1, -9])); // null
console.log(upArray([])); // null
console.log(
  upArray([
    9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8,
    4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 1,
  ])
);
//[9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7, 5, 3, 2, 6, 7, 8, 4, 2, 4, 2, 6, 7, 8, 7, 4, 5, 2, 2]
