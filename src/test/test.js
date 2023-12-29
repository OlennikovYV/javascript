mocha.setup('bdd');

describe(`Hello Happy Codevarrior!`, function () {
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

  it('test', () => {
    let albert = new Warrior('Albert');
    let boris = new Warrior('Boris');

    equal(albert.toString(), "Hi! my name's Albert");
    equal(albert.name(), 'Albert');
    equal(boris.name(), 'Boris');

    boris.name('Bobo');
    equal(boris.name(), 'Bobo');
  });
});

mocha.run();
