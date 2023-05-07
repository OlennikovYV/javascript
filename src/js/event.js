function roundIt(n) {
  const [left, right] = String(n)
    .split('.')
    .map(side => side.length);

  if (left > right) return Math.floor(n);
  if (left < right) return Math.ceil(n);
  return Math.round(n);
}

console.log(roundIt(3.45)); // 4
console.log(roundIt(34.5)); // 34
console.log(roundIt(34.56)); // 35
