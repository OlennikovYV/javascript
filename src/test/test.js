mocha.setup('bdd');

describe('Return substring instance count', function () {
  it('test', () => {
    chai.expect(solution('abcdeb', 'b')).to.equal(2);
    chai.expect(solution('abc', 'b')).to.equal(1);
    chai.expect(solution('abbc', 'bb')).to.equal(1);
  });
});

mocha.run();
