const AmIAfraid = function (day, num) {
  const depends = {
    Monday: num => num === 12,
    Tuesday: num => num > 95,
    Wednesday: num => num === 34,
    Thursday: num => num === 0,
    Friday: num => num % 2 === 0,
    Saturday: num => num === 56,
    Sunday: num => Math.abs(num) === 666,
  };

  return depends[day](num);
};

console.log(AmIAfraid('Monday', 13)); // false
console.log(AmIAfraid('Sunday', -666)); // true
console.log(AmIAfraid('Tuesday', 2)); // false
console.log(AmIAfraid('Tuesday', 965)); // true
console.log(AmIAfraid('Friday', 2)); // true
