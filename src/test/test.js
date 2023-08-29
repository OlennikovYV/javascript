mocha.setup('bdd');

describe(`No ifs no buts`, function () {
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

  it('Should handle manual tests', function () {
    equal(noIfsNoButs(45, 51), '45 is smaller than 51');
    equal(noIfsNoButs(1, 2), '1 is smaller than 2');
    equal(noIfsNoButs(-3, 2), '-3 is smaller than 2');
    equal(noIfsNoButs(1, 1), '1 is equal to 1');
    equal(noIfsNoButs(100, 100), '100 is equal to 100');
    equal(noIfsNoButs(100, 80), '100 is greater than 80');
    equal(noIfsNoButs(20, 19), '20 is greater than 19');
  });
});

mocha.run();
