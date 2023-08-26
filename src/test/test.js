mocha.setup('bdd');

describe(`Colour Association`, function () {
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

  it('Should pass sample tests', () => {
    deepEqual(
      colourAssociation([
        ['white', 'goodness'],
        ['blue', 'tranquility'],
      ]),
      [{ white: 'goodness' }, { blue: 'tranquility' }]
    );
    deepEqual(
      colourAssociation([
        ['red', 'energy'],
        ['yellow', 'creativity'],
        ['brown', 'friendly'],
        ['green', 'growth'],
      ]),
      [
        { red: 'energy' },
        { yellow: 'creativity' },
        { brown: 'friendly' },
        { green: 'growth' },
      ]
    );
  });
});

mocha.run();
