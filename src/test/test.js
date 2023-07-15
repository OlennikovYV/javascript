mocha.setup('bdd');

describe(`Multiply the number`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;

  it('Basic tests', function () {
    equal(multiply(10), 250);
    equal(multiply(5), 25);
    equal(multiply(200), 25000);
    equal(multiply(0), 0);
    equal(multiply(-2), -10);
  });
});

mocha.run();
