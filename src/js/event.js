const pointInCircle = (x, y) => Math.pow(x, 2) + Math.pow(y, 2) < 1;

console.log(pointInCircle(0, 0)); // True
console.log(pointInCircle(2, 0)); // False
console.log(pointInCircle(0, 0.9)); // True
console.log(pointInCircle(0.5, 0.5)); // True
console.log(pointInCircle(1, 0)); // False
