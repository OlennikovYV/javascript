mocha.setup('bdd');

describe('True Min', function () {
  it('test', () => {
    chai.assert.isTrue(
      min(1, -2.5) === -2.5,
      'Return the minimum of the two arguments'
    );
    chai.assert.isNaN(min(1.5, NaN), 'Any NaN value should return NaN');
    chai.assert.isNaN(
      min(1.5, undefined),
      'Any undefined value should return NaN'
    );
    chai.assert.isTrue(
      min(-Infinity, Infinity) === -Infinity,
      'Infinity should be handled like normal numbers'
    );
    chai.assert.isTrue(min(null, 2.5) === 0, 'treat null as if it were 0');
  });
});

mocha.run();
