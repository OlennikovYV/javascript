function solve(a, b) {
  while (a !== 0 && b !== 0) {
    if (a >= 2 * b) {
      a -= 2 * b;
      continue;
    }

    if (b >= 2 * a) {
      b -= 2 * a;
      continue;
    } else {
      return [a, b];
    }
  }

  return [a, b];
}

console.log(solve(6, 19)); // [6, 7]
console.log(solve(2, 1)); // [0, 1]
console.log(solve(22, 5)); // [0, 1]
console.log(solve(2, 10)); // [2, 2]
