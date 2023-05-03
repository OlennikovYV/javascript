function geometricSequenceElements(a, r, n) {
  return Array.from({ length: n }, (_, i) => a * r ** i).join(', ');
}

console.log(geometricSequenceElements(2, 3, 5));
// '2, 6, 18, 54, 162');
console.log(geometricSequenceElements(2, 2, 10));
// '2, 4, 8, 16, 32, 64, 128, 256, 512, 1024'
console.log(geometricSequenceElements(1, -2, 10));
// '1, -2, 4, -8, 16, -32, 64, -128, 256, -512'
