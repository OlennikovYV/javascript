function add(...numbers) {
  return Math.round(
    numbers.reduce((sum, digit, index) => sum + digit / (index + 1), 0)
  );
}

console.log(add()); // 0
console.log(add(100, 200, 300)); // 300
console.log(add(2)); // 2
console.log(add(4, -3, -2)); // 2
console.log(add(-1, -2, -3, -4)); // -4
console.log(add(446, -275, 241, 76, -272, -231, 327, -493)); // 300
