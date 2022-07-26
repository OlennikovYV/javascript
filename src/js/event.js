function foldTo(distance) {
  let widthPaper = 0.0001;
  let count = 0;

  if (distance < 0) return null;

  while (widthPaper < distance) {
    widthPaper *= 2;
    count += 1;
  }
  return count;
}

console.log(foldTo(384000000)); // 42
console.log(foldTo(-1)); // null
