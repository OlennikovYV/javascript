mocha.setup('bdd');

describe(`Find an employees role in the company`, function () {
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
    equal(findEmployeesRole('Dipper Pines'), 'Does not work here!');
    equal(findEmployeesRole('Morty Smith'), 'Truck Driver');
    equal(findEmployeesRole('Anna Bell'), 'Admin');
  });
});

mocha.run();
