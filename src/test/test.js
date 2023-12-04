mocha.setup('bdd');

describe(`Recursion #2 - Fibonacci`, function () {
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

  it(`fibonacci(1)`, () => {
    equal(fibonacci(1), 1);
  });
  it(`fibonacci(2)`, () => {
    equal(fibonacci(2), 1);
  });
  it(`fibonacci(3)`, () => {
    equal(fibonacci(3), 2);
  });
  it(`fibonacci(4)`, () => {
    equal(fibonacci(4), 3);
  });
});

mocha.run();
