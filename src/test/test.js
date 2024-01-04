mocha.setup('bdd');

describe(`Loose Change!`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
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
    equal(changeCount('dime penny dollar'), '$1.11');
    equal(changeCount('dime penny nickel'), '$0.16');
    equal(changeCount('quarter quarter'), '$0.50');
    equal(changeCount('dollar penny dollar'), '$2.01');
    equal(
      changeCount(
        'dollar dollar dollar dollar dollar dollar dollar dollar dollar dollar penny'
      ),
      '$10.01'
    );
  });
});

mocha.run();
