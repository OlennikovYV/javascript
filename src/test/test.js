mocha.setup('bdd');

describe(`Sort My Textbooks`, function () {
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
  const error = chai.assert.throws;

  it('Basic', () => {
    deepEqual(sorter(['Algebra', 'History', 'Geometry', 'English']), [
      'Algebra',
      'English',
      'Geometry',
      'History',
    ]);
  });
  it('Capitalization', () => {
    deepEqual(sorter(['Algebra', 'history', 'Geometry', 'english']), [
      'Algebra',
      'english',
      'Geometry',
      'history',
    ]);
  });
  it('Symbols', () => {
    deepEqual(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']), [
      '$istory',
      '**english',
      'Alg#bra',
      'Geom^try',
    ]);
  });
});

mocha.run();
