mocha.setup('bdd');

describe(`Be Concise IV - Index of an element in an array`, function () {
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
  const include = chai.assert.include;

  it('should behave as expected', () => {
    let array = [2, 3, 5, 7, 11];

    equal(find(array, 5), 2);
    equal(find(array, 11), 4);
    equal(find(array, 3), 1);
    equal(find(array, 2), 0);
    equal(find(array, 7), 3);
    equal(find(array, 1), 'Not found');
    equal(find(array, 8), 'Not found');

    array = [true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI];

    equal(find(array, 'Hello World'), 1);
    equal(find(array, 'lorem ipsum'), 'Not found');
    equal(find(array, 'Lorem Ipsum'), 3);
    equal(find(array, false), 2);
    equal(find(array, true), 0);
    equal(find(array, Math.PI), 5);
    equal(find(array, 3.14), 'Not found');
    equal(find(array, 6), 4);
  });
});

mocha.run();
