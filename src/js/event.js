function solve(n) {
  let balance = n;
  let countBanktots = 0;
  const nominals = [500, 200, 100, 50, 20, 10];

  if (n % 10 !== 0) return -1;

  for (let i = 0; i < nominals.length; i++) {
    if (balance >= nominals[i]) {
      countCurrentNominal = Math.floor(balance / nominals[i]);
      countBanktots += countCurrentNominal;

      balance -= countCurrentNominal * nominals[i];
    }
  }

  return countBanktots;
}

console.log(solve(770)); // 4
console.log(solve(550)); // 2
console.log(solve(10)); // 1
console.log(solve(1250)); // 4

console.log(solve(125)); // -1
console.log(solve(666)); // -1
console.log(solve(42)); // -1
