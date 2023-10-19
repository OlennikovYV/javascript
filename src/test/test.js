mocha.setup('bdd');

describe(`getNames()`, function () {
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

  it('should return the names of the people passed in', function () {
    const data = [
      { name: 'Joe', age: 20 },
      { name: 'Bill', age: 30 },
      { name: 'Kate', age: 23 },
    ];
    deepEqual(getNames(data), ['Joe', 'Bill', 'Kate']);
  });
});

mocha.run();
