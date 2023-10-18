mocha.setup('bdd');

describe(`Vector class`, function () {
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
  const throws = chai.assert.throws;

  it('test', () => {
    const a = new Vector([1, 2]);
    const b = new Vector([3, 4]);
    const c = new Vector([5, 6, 7, 8]);

    deepEqual(a.add(b), new Vector([4, 6]));
    deepEqual(b.subtract(a), new Vector([2, 2]));
    equal(a.dot(b), 11);
    equal(b.norm(), 5);
    equal(a.toString(), '(1,2)');
    isTrue(a.add(b).equals(new Vector([4, 6])));
    throws(() => a.add(c), 'Error');
  });
});

mocha.run();
