mocha.setup('bdd');

describe(`Grouped by commas`, function () {
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
    equal(groupByCommas(1), '1');
    equal(groupByCommas(10), '10');
    equal(groupByCommas(100), '100');
    equal(groupByCommas(1000), '1,000');
    equal(groupByCommas(10000), '10,000');
    equal(groupByCommas(100000), '100,000');
    equal(groupByCommas(1000000), '1,000,000');
    equal(groupByCommas(35235235), '35,235,235');
  });
});

mocha.run();
