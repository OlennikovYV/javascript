function colourAssociation(array) {
  return array.map(([color, association]) => ({ [color]: association }));
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
