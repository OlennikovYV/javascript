mocha.setup('bdd');

describe(`Singleton Pattern`, function () {
  const equal = chai.assert.equal;
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
    var obj1 = new Singleton();
    var obj2 = new Singleton();

    deepEqual(obj1, obj2);

    obj1.test = 1;
    equal(obj2.test, 1); // => 1
  });
});

mocha.run();
