mocha.setup('bdd');

describe('Simple beads count', () => {
  it('Basic tests', function () {
    chai.expect(countRedBeads(0)).to.equal(0);
    chai.expect(countRedBeads(1)).to.equal(0);
    chai.expect(countRedBeads(3)).to.equal(4);
    chai.expect(countRedBeads(5)).to.equal(8);
  });
});

mocha.run();
