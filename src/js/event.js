function trianglePerimeter(triangle) {
  const lengthSide = (a, b) => Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);

  const lengthSide1 = lengthSide(triangle.a, triangle.b);
  const lengthSide2 = lengthSide(triangle.b, triangle.c);
  const lengthSide3 = lengthSide(triangle.c, triangle.a);

  const Perimeter = lengthSide1 + lengthSide2 + lengthSide3;

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
