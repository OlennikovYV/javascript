function countDays(d) {
  const day = 1000 * 60 * 60 * 24;
  const nowDate = new Date();
  const differenceInTime = d - nowDate;
  const differenceInDays = Math.round(differenceInTime / day);

  if (differenceInDays < 0) return 'The day is in the past!';
  if (differenceInDays > 0) return `${differenceInDays} days`;

  return 'Today is the day!';
}

console.log(countDays(new Date('February 28, 2016'))); // 'The day is in the past!'
console.log(countDays(new Date())); // 'Today is the day!'
console.log(countDays(new Date('2511-12-31T00:00:00.000Z'))); // '178178 days'
console.log(countDays(new Date('2024-03-01T00:00:00.000Z'))); // '1 days'
