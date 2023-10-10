mocha.setup('bdd');

describe(`Pirates!! Are the Cannons ready!??`, function () {
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

  let a = { Mike: 'aye', Joe: 'aye', Johnson: 'aye', Peter: 'aye' };
  let b = { Mike: 'aye', Joe: 'nay', Johnson: 'aye', Peter: 'aye' };

  it('should Fire on aye', function () {
    equal(cannonsReady(a), 'Fire!');
  });
  it('should Shiver me timbers on nay', function () {
    equal(cannonsReady(b), 'Shiver me timbers!');
  });
});

mocha.run();
