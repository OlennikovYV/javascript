class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}

function circleCircumference(circle) {
  return 2 * Math.PI * circle.radius;
}

console.log(+circleCircumference(new Circle(new Point(10, 10), 30)).toFixed(6));
// 188.495559
console.log(
  +circleCircumference(new Circle(new Point(25, -70), 30)).toFixed(6)
);
// 188.495559
console.log(+circleCircumference(new Circle(new Point(-15, 5), 0)).toFixed(6));
// 0
console.log(
  +circleCircumference(new Circle(new Point(-15, 5), 12.5)).toFixed(6)
);
// 78.539816
