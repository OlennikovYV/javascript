function circleArea(circle) {
  return Number((Math.PI * Math.pow(circle.radius, 2)).toFixed(6));
}

class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

console.log(+circleArea(new Circle(new Point(10, 10), 30)).toFixed(6));
// 2827.433388
console.log(+circleArea(new Circle(new Point(25, -70), 30)).toFixed(6));
// 2827.433388
console.log(+circleArea(new Circle(new Point(-15, 5), 0)).toFixed(6));
// 0
console.log(+circleArea(new Circle(new Point(-15, 5), 12.5)).toFixed(6));
// 490.873852
