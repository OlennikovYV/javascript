mocha.setup('bdd');

describe(`Refactored Greeting`, function () {
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

  it('It should works for basic tests.', function () {
    const joe = new Person('Joe');

    equal(joe.greet('Kate'), 'Hello Kate, my name is Joe');
    equal(joe.name, 'Joe');
  });
});

mocha.run();
