mocha.setup('bdd');

describe(`Replace every nth`, function () {
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
    equal(
      replaceNth('Vader said: No, I am your father!', 2, 'a', 'o'),
      'Vader soid: No, I am your fother!'
    );
    equal(
      replaceNth('Vader said: No, I am your father!', 4, 'a', 'o'),
      'Vader said: No, I am your fother!'
    );
    equal(
      replaceNth('Vader said: No, I am your father!', 6, 'a', 'o'),
      'Vader said: No, I am your father!'
    );
    equal(
      replaceNth('Vader said: No, I am your father!', 0, 'a', 'o'),
      'Vader said: No, I am your father!'
    );
    equal(
      replaceNth('Vader said: No, I am your father!', -2, 'a', 'o'),
      'Vader said: No, I am your father!'
    );
    equal(
      replaceNth('Vader said: No, I am your father!', 1, 'i', 'y'),
      'Vader sayd: No, I am your father!'
    );

    equal(
      replaceNth('Luke cries: Noooooooooooooooo!', 6, 'o', 'i'),
      'Luke cries: Noooooioooooioooo!'
    );
  });
});

mocha.run();
