mocha.setup('bdd');

describe(`Move all vowels`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('Testing for "day"', () => {
    equal(moveVowel('day'), 'dya');
  });
  it('Testing for "apple"', () => {
    equal(moveVowel('apple'), 'pplae');
  });
  it('Testing for "peace"', () => {
    equal(moveVowel('peace'), 'pceae');
  });
  it('Testing for "maker"', () => {
    equal(moveVowel('maker'), 'mkrae');
  });
});

mocha.run();
