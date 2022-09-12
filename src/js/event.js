Math.round = function (number) {
  return Number(number.toFixed(0));
};

function trimWholePiece(number) {}

Math.ceil = function (number) {
  const strNumber = String(number);
  const index = strNumber.indexOf('.');
  const whole =
    index >= 0 ? Number(strNumber.slice(0, index)) : Number(strNumber);

  return number === whole ? whole : whole + 1;
};

Math.floor = function (number) {
  const strNumber = String(number);
  const index = strNumber.indexOf('.');
  const whole =
    index >= 0 ? Number(strNumber.slice(0, index)) : Number(strNumber);

  return whole;
};

console.log(Math.round(0.4)); // 0, 'Math.round(0.4)'
console.log(Math.round(0.5)); // 1, 'Math.round(0.5)'

console.log(Math.ceil(0.4)); // 1, 'Math.ceil(0.4)'
console.log(Math.ceil(0.5)); // 1, 'Math.ceil(0.5)'
console.log(Math.ceil(5)); // 5, 'Math.ceil(5)'

console.log(Math.floor(0.4)); // 0, 'Math.floor(0.4)'
console.log(Math.floor(0.5)); // 0, 'Math.floor(0.5)'
console.log(Math.floor(5)); // 5, 'Math.floor(5)'
