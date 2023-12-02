mocha.setup('bdd');

describe(`Elevator Distance`, function () {
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
    equal(elevatorDistance([5, 2, 8]), 9);
    equal(elevatorDistance([1, 2, 3]), 2);
    equal(elevatorDistance([7, 1, 7, 1]), 18);
  });
});

mocha.run();
