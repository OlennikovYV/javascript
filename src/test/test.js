mocha.setup('bdd');

describe('filterEvenLengthWords', function () {
  it('test', () => {
    chai.expect(filterEvenLengthWords(['Hello', 'World']).length).to.equal(0);

    chai
      .expect(filterEvenLengthWords(['One', 'Two', 'Three', 'Four']).length)
      .to.equal(1);
  });
});

mocha.run();
