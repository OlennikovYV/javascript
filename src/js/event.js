const fibonacci = (function (n) {
  let cache = [0, 1];
  return function (n) {
    return (cache[n] = cache[n] || fibonacci(n - 1) + cache[n - 2]);
  };
})();

console.log(fibonacci(70)); // 190392490709135
console.log(fibonacci(60)); // 1548008755920
console.log(fibonacci(50)); // 12586269025
