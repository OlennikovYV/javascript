mocha.setup('bdd');

describe(`Debug Basic Calculator`, function () {
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

  it('test', () => {
    equal(calculate(2, '+', 4), 6);
    equal(calculate(6, '-', 1.5), 4.5);
    equal(calculate(-4, '*', 8), -32);
    equal(calculate(49, '/', -7), -7);
    equal(calculate(8, 'm', 2), null);
    equal(calculate(4, '/', 0), null);
  });
});

mocha.run();
