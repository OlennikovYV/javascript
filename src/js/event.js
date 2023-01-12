const circleArea = function (radius) {
  const area = Math.PI * Math.pow(radius, 2);

  return isNaN(radius) || radius <= 0 ? false : Number(area.toFixed(2));
};

console.log(circleArea(-1485.86)); //returns false
console.log(circleArea(0)); //returns false
console.log(circleArea(43.2673)); //returns 5881.25
console.log(circleArea(68)); //returns 14526.72
console.log(circleArea('number')); //returns false
