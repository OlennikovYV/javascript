function dative(word) {
  const frontVowel = ['e', 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']; // the suffix is -nek
  const backVowel = ['a', 'á', 'o', 'ó', 'u', 'ú']; // the suffix is -nak

  for (let i = word.length - 1; i >= 0; i = i - 1) {
    if (frontVowel.includes(word[i])) return word + 'nek';
    if (backVowel.includes(word[i])) return word + 'nak';
  }
}

const tests = [
  // [input, expected]
  ['ablak', 'ablaknak'],
  ['tükör', 'tükörnek'],
  ['keret', 'keretnek'],
  ['otthon', 'otthonnak'],
  ['virág', 'virágnak'],
  ['tett', 'tettnek'],
  ['rokkant', 'rokkantnak'],
  ['rossz', 'rossznak'],
  ['gonosz', 'gonosznak'],
  ['űr', 'űrnek'],
];

for (let i = 0, l = tests.length; i < l; i++) {
  var input = tests[i][0];
  var expected = tests[i][1];
  const expectedFunc = dative(input);
  console.log(
    input + ' -> ' + expectedFunc + ' -> ' + String(expected === expectedFunc)
  );
}
