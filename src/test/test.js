mocha.setup('bdd');

describe(`Selective fear of numbers`, function () {
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

  it('Testing for fixed tests', () => {
    equal(AmIAfraid('Monday', 13), false, 'Should return false');
    equal(AmIAfraid('Sunday', -666), true, 'Should return true');
    equal(AmIAfraid('Tuesday', 2), false, 'Should return false');
    equal(AmIAfraid('Tuesday', 965), true, 'Should return true');
    equal(AmIAfraid('Friday', 2), true, 'Should return true');
  });
});

mocha.run();
