function yearDays(year) {
  let isGregorian = year % 4 === 0;
  let hundredYear = Math.trunc(year / 100) * 100;

  isGregorian = isGregorian && hundredYear % 400 === 0;

  return `${year} has ${isGregorian ? 366 : 365} days`;
}

console.log(yearDays(0)); // '0 has 366 days'
console.log(yearDays(-64)); // '-64 has 366 days'
console.log(yearDays(2016)); // '2016 has 366 days'
console.log(yearDays(1974)); // '1974 has 365 days'
console.log(yearDays(-10)); // '-10 has 365 days'
console.log(yearDays(666)); // '666 has 365 days'
console.log(yearDays(1800)); // '1800 has 365 days'
console.log(yearDays(1857)); // '1857 has 365 days'
