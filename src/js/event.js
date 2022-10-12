function sum() {
  let sum = 0;

  for (let i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }

  return sum;
}

console.log(sum(1)); // 1
console.log(sum(1, 2)); // 3
console.log(sum(5, 7, 9)); // 21
console.log(sum(12, 1, 1, 1, 1)); // 16
console.log(sum(12, 1, 1, 1, 1, 1, 1)); // 18
