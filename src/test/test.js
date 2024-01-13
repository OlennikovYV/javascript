mocha.setup('bdd');

describe(`Add a property to an object`, function () {
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

  let obj = {};

  before(function () {
    obj = {};
    addProperty(obj, 'name', 'Palle');
  });

  it('Should set the value of the property', function () {
    isTrue(obj.name === 'Palle');
  });

  it('Should allow setting the new property to another value', function () {
    obj.name = 'Dylan';
    isTrue(obj.name === 'Dylan');
  });

  it('Should throw an error if the property already exists', function () {
    error(function () {
      addProperty(obj, 'name', 'Palle');
    }, 'Error');
  });
});

mocha.run();
