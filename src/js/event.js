function differenceInAges(ages) {
  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);

  return [minAge, maxAge, maxAge - minAge];
}

console.log(differenceInAges([82, 15, 6, 38, 35])); // [6, 82, 76]
console.log(differenceInAges([57, 99, 14, 32])); // [14, 99, 85]
