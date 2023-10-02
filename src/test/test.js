mocha.setup('bdd');

describe(`Operator overload ?`, function () {
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
    equal(new Foo(2) + new Foo(3), 5);
    equal(new Foo(-2) + new Foo(3), 1);
    equal(new Foo(-21) + new Foo(-7), -28);
    equal(new Foo(1.5) + new Foo(0.2), 1.7);
  });
});

mocha.run();
