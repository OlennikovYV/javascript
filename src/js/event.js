function heron(a, b, c) {
  const s = (a + b + c) / 2;
  let result = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return Number(result.toFixed(2));
}

console.log(heron(3, 4, 5)); // 6
console.log(heron(6, 8, 10)); // 24
