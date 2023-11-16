mocha.setup('bdd');

describe(`Decreasing Inputs`, function () {
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

  it('add() = 0', () => {
    equal(add(), 0);
  });

  it('add(100, 200, 300) = 300', () => {
    equal(add(100, 200, 300), 300);
  });

  it('add(2) = 2', () => {
    equal(add(2), 2);
  });

  it('add(4, -3, -2) = 2', () => {
    equal(add(4, -3, -2), 2);
  });

  it('add(-1, -2, -3, -4) = -4', () => {
    equal(add(-1, -2, -3, -4), -4);
  });

  it('add(446, -275, 241, 76, -272, -231, 327, -493) = 300', () => {
    console.log(add(446, -275, 241, 76, -272, -231, 327, -493)); // 300
  });
});

mocha.run();
