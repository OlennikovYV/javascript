mocha.setup('bdd');

describe(`The Lamp: Revisited`, function () {
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

  it('Lamp', function () {
    const myLamp = new Lamp('Blue');

    equal(myLamp.color, 'Blue');
    equal(myLamp.on, false);
    equal(myLamp.state(), 'The lamp is off.');
    // now switch it on
    myLamp.toggleSwitch();
    equal(myLamp.state(), 'The lamp is on.');
  });
});

mocha.run();
