function Point(a, b) {
  this.x = a;
  this.y = b;
}

function distanceBetweenPoints(a, b) {
  return +Math.hypot(b.x - a.x, b.y - a.y).toFixed(6);
}

console.log(distanceBetweenPoints(new Point(3, 3), new Point(3, 3)));
// 0
console.log(distanceBetweenPoints(new Point(1, 6), new Point(4, 2)));
// 5
console.log(
  distanceBetweenPoints(new Point(-10.2, 12.5), new Point(0.3, 14.7))
);
// 10.728001
