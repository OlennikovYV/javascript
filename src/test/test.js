mocha.setup('bdd');

describe(`Find within array`, function () {
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
  const throws = chai.assert.throws;

  it('test', () => {
    const trueIfEven = function (v, i) {
      return v % 2 === 0;
    };
    const neverTrue = function (v, i) {
      return false;
    };
    const trueIfValueEqualsIndex = function (v, i) {
      return v === i;
    };
    const trueIfLengthEqualsIndex = function (v, i) {
      return v.length === i;
    };

    equal(findInArray([], trueIfEven), -1);
    equal(findInArray([1, 3, 5, 6, 7], trueIfEven), 3);
    equal(findInArray([2, 4, 6, 8], trueIfEven), 0);
    equal(findInArray([2, 4, 6, 8], neverTrue), -1);
    equal(findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex), 4);
    equal(
      findInArray(
        ['one', 'two', 'three', 'four', 'five', 'six'],
        trueIfLengthEqualsIndex
      ),
      4
    );
    equal(findInArray(['bc', 'af', 'd', 'e'], trueIfLengthEqualsIndex), -1);
  });
});

mocha.run();
