const lengthSide = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

function trianglePerimeter(triangle) {
  const { a, b, c } = triangle;
  const Perimeter = lengthSide(a, b) + lengthSide(b, c) + lengthSide(c, a);

  return Perimeter;
}

class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
}

console.log(
  +trianglePerimeter(
    new Triangle(new Point(10, 10), new Point(40, 10), new Point(10, 50))
  ).toFixed(6)
);
// 120
console.log(
  +trianglePerimeter(
    new Triangle(new Point(15, -10), new Point(40, 20), new Point(20, 50))
  ).toFixed(6)
);
// 135.314734
