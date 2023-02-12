function periodIsLate(last, today, cycleLength) {
  const oneDay = 1000 * 60 * 60 * 24;
  const diffDates = today - last;

  return Math.ceil(diffDates / oneDay) > cycleLength;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
// false
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));
// true
