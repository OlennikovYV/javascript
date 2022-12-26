mocha.setup('bdd');

describe('Is every value in the array an array?', () => {
  it('Tests to see if your function returns the correct values.', () => {
    chai.expect(arrCheck([])).to.equal(true);
    chai.expect(arrCheck([['string']])).to.equal(true);
    chai.expect(arrCheck([[], {}])).to.equal(false);
    chai.expect(arrCheck([[1], [2], [3]])).to.equal(true);
    chai.expect(arrCheck(['A', 'R', 'R', 'A', 'Y'])).to.equal(false);
  });
});

mocha.run();
