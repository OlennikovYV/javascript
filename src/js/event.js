const terms = [
  'Partridge',
  'PearTree',
  'Chat',
  'Dan',
  'Toblerone',
  'Lynn',
  'AlphaPapa',
  'Nomad',
];

function part(x) {
  let countTerms = x.filter(el => terms.includes(el)).length;

  if (countTerms > 0) return `Mine's a Pint${'!'.repeat(countTerms)}`;

  return "Lynn, I've pierced my foot on a spike!!";
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']));
// 'Mine\'s a Pint!'
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']));
// 'Lynn, I\'ve pierced my foot on a spike!!'
console.log(
  part([
    'Grouse',
    'Partridge',
    'Pheasant',
    'Goose',
    'Starling',
    'Robin',
    'Thrush',
    'Emu',
    'PearTree',
    'Chat',
    'Dan',
    'Square',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'BMW',
    'Graham',
    'Tool',
    'Nomad',
    'Finger',
    'Hamster',
  ])
);
// 'Mine\'s a Pint!!!!!!!!'
