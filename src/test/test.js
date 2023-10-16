mocha.setup('bdd');

describe(`Switch/Case - Bug Fixing #6`, function () {
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

  it('Fixed tests', () => {
    equal(
      evalObject({ a: 1, b: 1, operation: '+' }),
      2,
      'Return the evaluated string as a number!'
    );
    equal(
      evalObject({ a: 1, b: 1, operation: '-' }),
      0,
      'Return the evaluated string as a number!'
    );
    equal(
      evalObject({ a: 1, b: 1, operation: '/' }),
      1,
      'Return the evaluated string as a number!'
    );
    equal(
      evalObject({ a: 1, b: 1, operation: '*' }),
      1,
      'Return the evaluated string as a number!'
    );
    equal(
      evalObject({ a: 1, b: 1, operation: '%' }),
      0,
      'Return the evaluated string as a number!'
    );
    equal(
      evalObject({ a: 1, b: 1, operation: '^' }),
      1,
      'Return the evaluated string as a number!'
    );
  });
});

mocha.run();
