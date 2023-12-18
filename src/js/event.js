function compoundArray(a, b) {
  const result = [];

  (a.length < b.length ? b : a).map((_, i) => {
    if (Number.isInteger(a[i])) result.push(a[i]);
    if (Number.isInteger(b[i])) result.push(b[i]);
  });

  return result;
}

console.log(compoundArray([11, 12], [21, 22, 23, 24]));
// [11, 21, 12, 22, 23, 24]
console.log(
  compoundArray(
    [2147483647, 2147483646, 2147483645, 2147483644, 2147483643],
    [9]
  )
);
// [2147483647, 9, 2147483646, 2147483645, 2147483644, 2147483643]
console.log(compoundArray([214, 215, 216, 217, 218], []));
// [214, 215, 216, 217, 218]
console.log(compoundArray([], [314, 315, 316, 317, 318]));
// [314, 315, 316, 317, 318]
