const fibonacci = n => {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
