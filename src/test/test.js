mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai
      .expect(paintLetterboxes(125, 132))
      .to.eql([1, 9, 6, 3, 0, 1, 1, 1, 1, 1]);
  });
});

mocha.run();
