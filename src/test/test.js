mocha.setup('bdd');

describe(`Is this working?`, function () {
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
    const counter = new Counter();
    equal(counter.count, 0, 'Counter should be reset');

    counter.updateCount();
    equal(counter.count, 1, 'Counter should have been updated');

    const counter2 = new Counter();
    equal(counter2.count, 0, 'New counter should use different value');

    equal(counter.count, 1, 'Old counter should have preserved its value');
  });
});

mocha.run();
