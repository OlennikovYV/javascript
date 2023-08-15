mocha.setup('bdd');

describe(`Hungarian Vowel Harmony (easy)`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

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

  it('should work for example tests', function () {
    for (let i = 0, l = tests.length; i < l; i++) {
      const input = tests[i][0];
      const expected = tests[i][1];
      equal(dative(input), expected);
    }
  });
});

mocha.run();
