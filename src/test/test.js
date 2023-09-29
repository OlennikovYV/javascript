mocha.setup('bdd');

describe(`Count strings in objects`, function () {
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

  it('should test', () => {
    equal(
      strCount({
        first: '1',
        second: '2',
        third: false,
        fourth: ['anytime', 2, 3, 4],
        fifth: null,
        sixth: undefined,
        seventh: {},
      }),
      3,
      'Did not count the correct number of strings. Check counting inside nested objects.'
    );
  });
});

mocha.run();
