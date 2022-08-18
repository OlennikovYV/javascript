const isReallyNaN = Number.isNaN;

console.log(isReallyNaN(37)); // false
console.log(isReallyNaN('37')); // false
console.log(isReallyNaN(NaN)); // true
console.log(isReallyNaN(undefined)); // false
