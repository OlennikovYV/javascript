mocha.setup('bdd');

describe('Max Headroom and JavaScript style', () => {
  it('test', () => {
    chai.expect(getMax2()).to.eql(getMax1());
  });
});

mocha.run();
