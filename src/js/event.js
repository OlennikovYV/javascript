Math.roundTo = function (number, precision) {
  let integer = number * Math.pow(10, precision);

  return Math.round(integer) / Math.pow(10, precision);
};

console.log(Math.roundTo(4, 5)); // 4
console.log(Math.roundTo(4.1235343424, 6)); // 4.123534
console.log(Math.roundTo(5.3035802, 3)); // 5.304
console.log(Math.roundTo(0.9384930193848595, 15)); // 0.938493019384860
console.log(Math.roundTo(9.9999, 3)); // 10

console.log(Math.roundTo(3.141592653589793, 10)); // 3.1415926536
console.log(Math.roundTo(3.141592653589793, 9)); // 3.141592654
console.log(Math.roundTo(3.141592653589793, 8)); // 3.14159265
console.log(Math.roundTo(3.141592653589793, 7)); // 3.1415927
console.log(Math.roundTo(3.141592653589793, 6)); // 3.141593
console.log(Math.roundTo(3.141592653589793, 5)); // 3.14159
console.log(Math.roundTo(3.141592653589793, 4)); // 3.1416
console.log(Math.roundTo(3.141592653589793, 3)); // 3.142
console.log(Math.roundTo(3.141592653589793, 2)); // 3.14
console.log(Math.roundTo(3.141592653589793, 1)); // 3.1
