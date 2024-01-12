mocha.setup('bdd');

describe(`Twisted Sum`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
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

  it('Sample test 1', () => {
    equal(twistedSum(3), 6, 'n = 3');
  });
  it('Sample test 2', () => {
    equal(twistedSum(10), 46, 'n = 10');
  });
  it('Sample test 3', () => {
    equal(twistedSum(11), 48, 'n = 11');
  });
  it('Sample test 4', () => {
    equal(twistedSum(12), 51, 'n = 12');
  });
});

mocha.run();
