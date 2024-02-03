mocha.setup('bdd');

describe(`What is type of variable?`, function () {
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

  it('test', () => {
    equal(type([]), 'array');
    equal(type({}), 'object');
    equal(type(''), 'string');
    equal(type([].join()), 'string');
    equal(type(new Date()), 'date');
    equal(
      type(() => {}),
      'function'
    );
    equal(type(NaN), 'number');
    equal(type(true), 'boolean');
    equal(type(null), 'null');
    equal(type(undefined), 'undefined');
  });
});

mocha.run();
