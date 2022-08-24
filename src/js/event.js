class Block {
  constructor(data) {
    [this.width, this.length, this.height] = data;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    const { width, length, height } = this;
    return width * length * height;
  }

  getSurfaceArea() {
    const { width, length, height } = this;
    return 2 * (width * length + length * height + width * height);
  }
}

let block = new Block([2, 4, 6]);

console.log(block.getWidth()); // 2
console.log(block.getLength()); // 4
console.log(block.getHeight()); // 6
console.log(block.getVolume()); // 48
console.log(block.getSurfaceArea()); // 88
