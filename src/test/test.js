mocha.setup('bdd');

describe(`Absent vowel`, function () {
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
    equal(absentVowel('John Doe hs seven red pples under his bsket'), 0);
    equal(
      absentVowel('Bb Smith sent us six neatly arranged range bicycles'),
      3
    );
  });
});

mocha.run();
