function noIfsNoButs(a, b) {
  const Greater = a > b;
  const Smaller = a < b;
  const Equal = a === b;

  const strGreater = Greater && 'is greater than';
  const strSmaller = Smaller && 'is smaller than';
  const strEqual = Equal && 'is equal to';

  return `${a} ${strGreater || strSmaller || strEqual} ${b}`;
}

console.log(noIfsNoButs(45, 51)); // '45 is smaller than 51'
console.log(noIfsNoButs(1, 2)); // '1 is smaller than 2'
console.log(noIfsNoButs(-3, 2)); // '-3 is smaller than 2'
console.log(noIfsNoButs(1, 1)); // '1 is equal to 1'
console.log(noIfsNoButs(100, 100)); // '100 is equal to 100'
console.log(noIfsNoButs(100, 80)); // '100 is greater than 80'
console.log(noIfsNoButs(20, 19)); // '20 is greater than 19'
