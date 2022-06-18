var fibonacci = function (n, memo = [0, 1, 1]) {
  if (memo[n]) return memo[n];

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
};

console.log(fibonacci(70)); // 190392490709135
console.log(fibonacci(60)); // 1548008755920
console.log(fibonacci(50)); // 12586269025
