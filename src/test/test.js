mocha.setup('bdd');

describe(`Digitize`, function () {
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
    deepEqual(digitize(123), [1, 2, 3]);
    deepEqual(digitize(1), [1]);
    deepEqual(digitize(0), [0]);
    deepEqual(digitize(1230), [1, 2, 3, 0]);
    deepEqual(digitize(8675309), [8, 6, 7, 5, 3, 0, 9]);
  });
});

mocha.run();
