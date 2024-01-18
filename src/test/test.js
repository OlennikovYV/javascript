mocha.setup('bdd');

describe(`Return the closest number multiple of 10`, function () {
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
  const error = chai.assert.throws;

  it('should return 10 for numbers from 10 to 14', function () {
    for (let i = 10; i <= 14; ++i) {
      equal(closestMultiple10(i), 10);
    }
  });

  it('should return 20 for numbers from 15 to 20', function () {
    for (let i = 15; i <= 20; ++i) {
      equal(closestMultiple10(i), 20);
    }
  });
});

mocha.run();
