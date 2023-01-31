mocha.setup('bdd');

describe('filterEvenLengthWords', function () {
  it('test', () => {
    chai.assert.equal(evenLast([2, 3, 4, 5]), 30);
  });
});

mocha.run();
