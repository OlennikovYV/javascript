Math.round = function (number) {
  return parseInt(number) + (number - parseInt(number) >= 0.5) ? 1 : 0;
};

Math.ceil = function (number) {
  return parseInt(number) === number ? number : parseInt(number) + 1;
};

Math.floor = function (number) {
  return parseInt(number);
};

console.log(Math.round(0.4)); // 0, 'Math.round(0.4)'
console.log(Math.round(0.5)); // 1, 'Math.round(0.5)'

console.log(Math.ceil(0.4)); // 1, 'Math.ceil(0.4)'
console.log(Math.ceil(0.5)); // 1, 'Math.ceil(0.5)'
console.log(Math.ceil(5)); // 5, 'Math.ceil(5)'

console.log(Math.floor(0.4)); // 0, 'Math.floor(0.4)'
console.log(Math.floor(0.5)); // 0, 'Math.floor(0.5)'
console.log(Math.floor(5)); // 5, 'Math.floor(5)'
