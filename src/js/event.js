function colorOf(r, g, b) {
  return (
    '#' +
    r.toString(16).padStart(2, '0') +
    g.toString(16).padStart(2, '0') +
    b.toString(16).padStart(2, '0')
  );
}

console.log(colorOf(255, 0, 0)); // '#ff0000'
console.log(colorOf(0, 111, 0)); // '#006f00'
console.log(colorOf(1, 2, 3)); // '#010203'
