mocha.setup('bdd');

describe(`Regex Failure - Bug Fixing #2`, function () {
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

  it('Fixed Tests', function () {
    equal(filterWords("You're Bad! timmy!"), "You're awesome! timmy!");
    equal(filterWords("You're MEAN! timmy!"), "You're awesome! timmy!");
  });
});

mocha.run();
