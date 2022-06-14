function dashatize(num) {
  let number = Math.abs(num);

  if (Number.isNaN(number)) return 'NaN';

  number = String(number)
    .split('')
    .map(el => (el % 2 === 0 ? el : `-${el}-`))
    .join('');

  number = number.replace(/--/g, '-');
  number = number.replace(/^[-]|[-]$/g, '');

  return number;
}

console.log(dashatize(274)); // "2-7-4", "Should return 2-7-4"
console.log(dashatize(5311)); // "5-3-1-1", "Should return 5-3-1-1"
console.log(dashatize(86320)); // "86-3-20", "Should return 86-3-20"
console.log(dashatize(974302)); // "9-7-4-3-02", "Should return 9-7-4-3-02"
console.log(dashatize(NaN)); // "NaN", "Should return NaN"
console.log(dashatize(0)); // "0", "Should return 0"
console.log(dashatize(-1)); // "1", "Should return 1"
console.log(dashatize(-28369)); // "28-3-6-9", "Should return 28-3-6-9"
