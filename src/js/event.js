function memo(func) {
  const cache = {};
  return function (n) {
    if (cache[n] === undefined) cache[n] = func(n);
    return cache[n];
  };
}

const fibonacci = memo(function (n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(70)); // 190392490709135
console.log(fibonacci(60)); // 1548008755920
console.log(fibonacci(50)); // 12586269025
