mocha.setup('bdd');

describe(`Calculate String Rotation`, function () {
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

  it('sample tests', () => {
    equal(shiftedDiff('eecoff', 'coffee'), 4);
    equal(shiftedDiff('Moose', 'moose'), -1);
    equal(shiftedDiff("isn't", "'tisn"), 2);
    equal(shiftedDiff('Esham', 'Esham'), 0);
    equal(shiftedDiff(' ', ' '), 0);
    equal(shiftedDiff('hoop', 'pooh'), -1);
    equal(shiftedDiff('  ', ' '), -1);
  });
});

mocha.run();
