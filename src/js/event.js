function unluckyDays(year) {
  let countBlackFriday = 0;

  for (let month = 0; month < 12; month += 1) {
    const date = new Date(year, month, 13);
    if (date.getDay() === 5) {
      countBlackFriday += 1;
    }
  }

  return countBlackFriday;
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
