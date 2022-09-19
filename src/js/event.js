const dict = {
  A: 'awesome',
  C: 'confident',
  D: 'disturbing',
  E: 'eager',
  G: 'gregarious',
  I: 'ingestable',
  J: 'joke',
  K: 'klingon',
  L: 'literal',
  M: 'mustache',
  N: 'newtonian',
  O: 'oscillating',
  P: 'perfect',
  R: 'rant',
  T: 'turn',
  S: 'stylish',
  W: 'weird',
};

const makeBackronym = function (string) {
  return string
    .split('')
    .map(char => dict[char.toUpperCase()])
    .join(' ');
};

const testCases = [
  ['dgm', 'disturbing gregarious mustache'],
  ['lkj', 'literal klingon joke'],
  [
    'interesting',
    'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious',
  ],
  [
    'codewars',
    'confident oscillating disturbing eager weird awesome rant stylish',
  ],
];

for (const [input, expected] of testCases)
  console.log(makeBackronym(input) + ` = ${expected}`);
