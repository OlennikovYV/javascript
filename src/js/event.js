var isMonotone = function (arr) {
  return arr.every((el, i) => i == 0 || el >= arr[i - 1]);
};

const range = function (a, b) {
  const r = [],
    step = b - a > 0 ? 1 : -1;
  do {
    r.push(a);
  } while (step * (b - (a += step)) >= 0);
  return r;
};

console.log(isMonotone(range(1, 10))); // true
console.log(isMonotone(range(4, 12))); // true
console.log(isMonotone([5, 5, 5, 5, 5])); // true
console.log(isMonotone([])); // true
console.log(isMonotone(range(5, 1))); // false
console.log(isMonotone([1, 2, 3, 3, 4, 5])); // false
