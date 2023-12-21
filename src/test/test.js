mocha.setup('bdd');

describe(`Convert Integer to Binary`, function () {
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
    equal(toBinary(2), '10');
    equal(toBinary(3), '11');
    equal(toBinary(-3), '11111111111111111111111111111101');
    equal(toBinary(4), '100');
    equal(toBinary(5), '101');
  });
});

mocha.run();
