class Cube {
  constructor(side = 0) {
    this.side = Math.abs(side);
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}

let cube = new Cube(12);
console.log(cube.getSide()); // 12
cube.setSide(42);
console.log(cube.getSide()); // 42
