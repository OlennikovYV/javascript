function createArrayOfTiers(num) {
  return String(num)
    .split('')
    .map((_, i, arr) => arr.slice(0, i + 1).join(''));
}

console.log(createArrayOfTiers(420));
// ['4', '42', '420']
console.log(createArrayOfTiers(2017));
// ['2', '20', '201', '2017']
