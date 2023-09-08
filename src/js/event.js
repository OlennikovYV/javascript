const AmIAfraid = function (day, num) {
  return {
    Monday: num === 12,
    Tuesday: num > 95,
    Wednesday: num === 34,
    Thursday: num === 0,
    Friday: num % 2 === 0,
    Saturday: num === 56,
    Sunday: Math.abs(num) === 666,
  }[day];
};

console.log(AmIAfraid('Monday', 13)); // false
console.log(AmIAfraid('Sunday', -666)); // true
console.log(AmIAfraid('Tuesday', 2)); // false
console.log(AmIAfraid('Tuesday', 965)); // true
console.log(AmIAfraid('Friday', 2)); // true
