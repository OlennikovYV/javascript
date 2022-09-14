function unluckyDays(year) {
  return Array.from({ length: 12 }).reduce((count, _, i) => {
    const day13OfMonth = new Date(year, i, 13);
    if (day13OfMonth.getDay() === 5) count += 1;

    return count;
  }, 0);
}

console.log(unluckyDays(1586)); // 1
console.log(unluckyDays(1001)); // 3
console.log(unluckyDays(2819)); // 2
console.log(unluckyDays(2792)); // 2
console.log(unluckyDays(2723)); // 2
console.log(unluckyDays(1909)); // 1
console.log(unluckyDays(1812)); // 2
console.log(unluckyDays(1618)); // 2
console.log(unluckyDays(2132)); // 1
console.log(unluckyDays(2065)); // 3
