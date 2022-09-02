mocha.setup('bdd');

describe('Tests', () => {
  it('Testing for []', () => {
    chai.expect(minimumSteps([4, 6, 3], 7)).to.equal(1);
    chai.expect(minimumSteps([10, 9, 9, 8], 17)).to.equal(1);
    chai.expect(minimumSteps([8, 9, 10, 4, 2], 23)).to.equal(3);
    chai
      .expect(minimumSteps([19, 98, 69, 28, 75, 45, 17, 98, 67], 464))
      .to.equal(8);
    chai.expect(minimumSteps([4, 6, 3], 2)).to.equal(0);
  });
});

mocha.run();
