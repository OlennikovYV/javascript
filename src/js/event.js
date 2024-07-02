function insurance(age, size, numofdays) {
  const dailyPrice = 50;
  const ageDailyPrice = age < 25 ? 10 : 0;
  let sizePrice;

  if (numofdays < 0) return 0;

  switch (size) {
    case 'economy':
      sizePrice = 0;
      break;
    case 'medium':
      sizePrice = 10;
      break;
    case 'full-size':
      sizePrice = 15;
      break;
    default:
      sizePrice = 15;
  }

  return numofdays * (sizePrice + dailyPrice + ageDailyPrice);
}

console.log(insurance(18, 'medium', 7)); // 490
console.log(insurance(30, 'full-size', 30)); // 1950

console.log(insurance(21, 'economy', -10)); // 0
console.log(insurance(42, 'my custom car', 7)); // 455
