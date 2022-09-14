mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    let scores = [49, 3, 5, 300, 7];
    chai.expect(average(scores)).to.equal(73);

    scores = [90, 98, 89, 100, 100, 86, 94];
    chai.expect(average(scores)).to.equal(94);
  });
});

mocha.run();
