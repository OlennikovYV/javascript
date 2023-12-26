function shiftedDiff(first, second) {
  if (first.length !== second.length) return -1;

  for (let i = 0; i < first.length; i++) {
    if (second.slice(i) + second.slice(0, i) === first) return i;
  }

  return -1;
}

console.log(shiftedDiff('eecoff', 'coffee')); // 4
console.log(shiftedDiff('Moose', 'moose')); // -1
console.log(shiftedDiff("isn't", "'tisn")); // 2
console.log(shiftedDiff('Esham', 'Esham')); // 0
console.log(shiftedDiff(' ', ' ')); // 0
console.log(shiftedDiff('hoop', 'pooh')); // -1
console.log(shiftedDiff('  ', ' ')); // -1
