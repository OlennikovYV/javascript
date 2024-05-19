function sumCircles(...diameters) {
  const pi = Math.PI;
  const areas = diameters.reduce((sumAreas, diameter) => {
    const radius = diameter / 2;
    return sumAreas + pi * Math.pow(radius, 2);
  }, 0);

  return `We have this much circle: ${Math.round(areas)}`;
}

console.log(sumCircles(2)); // 'We have this much circle: 3'
console.log(sumCircles(2, 3, 4)); // 'We have this much circle: 23'
console.log(sumCircles(1, 1, 1)); // 'We have this much circle: 2'
console.log(sumCircles(13.58, 14.9, 56.99, 107.321)); // 'We have this much circle: 11916'
