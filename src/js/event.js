function getSize(width, height, depth) {
  const area = (width * height + width * depth + height * depth) * 2;
  const volume = width * height * depth;
  return [area, volume];
}

console.log(getSize(4, 2, 6)); //  [88, 48]
console.log(getSize(10, 10, 10)); //  [600, 1000]
