mocha.setup('bdd');

describe(`Convert PascalCase string into snake_case`, function () {
  const equal = chai.assert.equal;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('test', () => {
    equal(toUnderscore('TestController'), 'test_controller');
    equal(toUnderscore('MoviesAndBooks'), 'movies_and_books');
    equal(toUnderscore('App7Test'), 'app7_test');
    equal(toUnderscore(1), '1');
  });
});

mocha.run();
