mocha.setup('bdd');

describe(`Ninja vs Samurai: Strike`, function () {
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

  it('Basic tests', () => {
    const ninja = new Warrior('Ninja');
    const samurai = new Warrior('Samurai');

    samurai.strike(ninja, 3);
    equal(ninja.health, 70); // ninja.health should == 70
  });
});

mocha.run();
