mocha.setup('bdd');

describe('Are there any arrows left?', () => {
  it('test', () => {
    chai.expect(anyArrows([])).to.equal(false);
    chai
      .expect(
        anyArrows([
          { range: 5 },
          { range: 10, damaged: true },
          { damaged: true },
        ])
      )
      .to.equal(true);
    chai
      .expect(anyArrows([{ range: 10, damaged: true }, { damaged: true }]))
      .to.equal(false);
  });
});

mocha.run();
