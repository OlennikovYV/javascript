mocha.setup('bdd');

describe('How many arguments', () => {
  it('test', () => {
    chai.expect(args_count(1, 2)).to.equal(2);
    chai.expect(args_count()).to.equal(0);
    chai.expect(args_count('A', 'B', 'C')).to.equal(3);
    chai.expect(args_count(['foo', 'bar'])).to.equal(1);
  });
});

mocha.run();
