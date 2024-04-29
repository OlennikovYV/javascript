mocha.setup('bdd');

describe(`Rock Off!`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
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
    equal(
      solve([47, 7, 2], [47, 7, 2]),
      '0, 0: that looks like a "draw"! Rock on!'
    );
    equal(solve([47, 67, 22], [26, 47, 12]), '3, 0: Alice made "Kurt" proud!');
    equal(solve([25, 50, 22], [34, 49, 50]), '1, 2: Bob made "Jeff" proud!');
  });
});

mocha.run();
