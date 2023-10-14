mocha.setup('bdd');

describe(`Lazy Repeater`, function () {
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

  const abc = makeLooper('abc');
  it('Should cycle through the given string', function () {
    equal(abc(), 'a');
    equal(abc(), 'b');
    equal(abc(), 'c');
  });
  it('Should return to its initial cycle once it reaches the end', () => {
    equal(abc(), 'a');
    equal(abc(), 'b');
    equal(abc(), 'c');
  });
});

mocha.run();
