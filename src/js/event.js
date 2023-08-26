function colourAssociation(array) {
  return array.map(association => ({ [association[0]]: association[1] }));
}

console.log(
  colourAssociation([
    ['white', 'goodness'],
    ['blue', 'tranquility'],
  ])
);
// [{ white: 'goodness' }, { blue: 'tranquility' }]
console.log(
  colourAssociation([
    ['red', 'energy'],
    ['yellow', 'creativity'],
    ['brown', 'friendly'],
    ['green', 'growth'],
  ])
);
// [
//   { red: 'energy' },
//   { yellow: 'creativity' },
//   { brown: 'friendly' },
//   { green: 'growth' },
// ]
