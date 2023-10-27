function area(d, l) {
  let area;

  if (d <= l) return 'Not a rectangle';

  area = l * Math.sqrt(Math.pow(d, 2) - Math.pow(l, 2));

  return Math.round(area * 100) / 100;
}

console.log(area(5, 4)); // 12
console.log(area(10, 6)); // 48
console.log(area(13, 5)); // 60
console.log(area(12, 5)); // 54.54
console.log(area(12, 12)); // 'Not a rectangle'
