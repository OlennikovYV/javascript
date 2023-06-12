mocha.setup('bdd');

describe(`Paul's Misery`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;

  it('Testing for fixed tests', () => {
    equal(paul(['life', 'eating', 'life']), 'Super happy!');
    equal(
      paul(['life', 'Petes kata', 'Petes kata', 'Petes kata', 'eating']),
      'Super happy!'
    );
    equal(
      paul([
        'Petes kata',
        'Petes kata',
        'eating',
        'Petes kata',
        'Petes kata',
        'eating',
      ]),
      'Happy!'
    );
  });
});

mocha.run();
