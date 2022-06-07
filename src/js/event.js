function twoOldestAges(ages) {
  let primaryOldestAge;
  let secondOldestAge;
  let [...oldestAges] = ages;

  oldestAges.sort((a, b) => a - b);
  primaryOldestAge = oldestAges.pop();
  secondOldestAge = oldestAges.pop();

  return [secondOldestAge, primaryOldestAge];
}

let results1 = [1, 5, 87, 45, 8, 8];
console.log(twoOldestAges(results1)); // 45, 87
results1 = [6, 5, 83, 5, 3, 18];
console.log(twoOldestAges(results1)); // 18, 83
results1 = [11, 53, 8, 29, 61, 61, 23, 35];
console.log(twoOldestAges(results1)); // 53, 61
