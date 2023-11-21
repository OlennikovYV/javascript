mocha.setup('bdd');

describe(`Broken Counter`, function () {
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

  var counter = new Counter();

  it('initialize', function () {
    equal(counter.getValue(), 0, 'Initial counter value must be 0');
  });

  it('increase', function () {
    counter.increase();
    equal(counter.getValue(), 1, 'Counter value must be increased');
  });

  it('reset', function () {
    counter.reset();
    equal(counter.getValue(), 0, 'Counter value must be 0 after reset');
  });
});

mocha.run();
