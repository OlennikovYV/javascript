mocha.setup('bdd');

describe(`Throwing Darts`, function () {
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
  const include = chai.assert.include;

  it('test', () => {
    equal(scoreThrows([1, 5, 11]), 15);
    equal(scoreThrows([15, 20, 30, 31, 32, 44, 100]), 0);
    equal(scoreThrows([1, 2, 3, 4]), 140);
    equal(scoreThrows([]), 0, 'Empty list');
    equal(scoreThrows([1, 2, 3, 4, 5, 6, 7, 8, 9]), 65);
    equal(scoreThrows([0, 5, 10, 10.5, 4.5]), 30);
  });
});

mocha.run();
