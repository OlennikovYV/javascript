mocha.setup('bdd');

describe(`Check if a triangle is an equable triangle!`, function () {
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

  it('Basic Tests', () => {
    equal(equableTriangle(5, 12, 13), true);
    equal(equableTriangle(2, 3, 4), false);
    equal(equableTriangle(6, 8, 10), true);
    equal(equableTriangle(7, 15, 20), true);
    equal(equableTriangle(17, 17, 30), false);
    equal(equableTriangle(7, 10, 12), false);
    equal(equableTriangle(6, 11, 12), false);
    equal(equableTriangle(25, 25, 45), false);
    equal(equableTriangle(13, 37, 30), false);
    equal(equableTriangle(6, 25, 29), true);
    equal(equableTriangle(10, 11, 18), false);
    equal(equableTriangle(73, 9, 80), false);
    equal(equableTriangle(12, 35, 37), false);
    equal(equableTriangle(120, 109, 13), false);
    equal(equableTriangle(9, 10, 17), true);
  });
});

mocha.run();
