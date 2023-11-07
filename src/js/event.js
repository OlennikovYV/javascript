function solve(n) {
  let balance = n;
  let countBanktots = 0;

  [500, 200, 100, 50, 20, 10].forEach(nominal => {
    countBanktots += Math.floor(balance / nominal);
    balance = balance % nominal;
  });

  return balance ? -1 : countBanktots;
}

console.log(solve(770)); // 4
console.log(solve(550)); // 2
console.log(solve(10)); // 1
console.log(solve(1250)); // 4

console.log(solve(125)); // -1
console.log(solve(666)); // -1
console.log(solve(42)); // -1
