mocha.setup('bdd');

describe(`What's A Name In?`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('test', () => {
    // equal(nameInStr('Across the rivers', 'chris'), true);
    // equal(nameInStr('Next to a lake', 'chris'), false);
    // equal(nameInStr('Under a sea', 'chris'), false);
    // equal(nameInStr('A crew that boards the ship', 'chris'), false);
    // equal(nameInStr('A live son', 'Allison'), false);
  });
});

mocha.run();
