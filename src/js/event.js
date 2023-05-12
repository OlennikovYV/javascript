function toAcronym(inp) {
  return inp
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

const tests = [
  ['Code Wars', 'CW'],
  ['Water Closet', 'WC'],
  ['Portable Network Graphics', 'PNG'],
  ['PHP: Hypertext Preprocessor', 'PHP'],
  ['hyper text markup language', 'HTML'],
];

tests.forEach(([inp, exp]) => console.log(toAcronym(inp), exp));
