mocha.setup('bdd');

describe(`Alan Partridge III - London`, function () {
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

  it('Testing for fixed tests', () => {
    equal(
      alan([
        'Norwich',
        'Rejection',
        'Disappointment',
        'Backstabbing Central',
        'Shattered Dreams Parkway',
        'London',
      ]),
      'Smell my cheese you mother!'
    );
    equal(alan(['London', 'Norwich']), 'No, seriously, run. You will miss it.');
    equal(
      alan([
        'Norwich',
        'Tooting',
        'Bank',
        'Rejection',
        'Disappointment',
        'Backstabbing Central',
        'Exeter',
        'Shattered Dreams Parkway',
        'Belgium',
        'London',
      ]),
      'Smell my cheese you mother!'
    );
  });
});

mocha.run();
