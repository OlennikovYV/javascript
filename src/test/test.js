mocha.setup('bdd');

describe(`Lowest product of 4 consecutive numbers`, function () {
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
    equal(lowestProduct('123456789'), 24);
    equal(lowestProduct('234567899'), 120);
    equal(lowestProduct('2345611117899'), 1);
    equal(lowestProduct('333'), 'Number is too small');
    equal(lowestProduct('1234111'), 4, 'Numbers should be consecutives');
  });
});

mocha.run();
