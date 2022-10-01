mocha.setup('bdd');

describe('lucky number', () => {
  it('Basic testing', function () {
    chai.expect(isLucky(1892376)).to.equal(true);
    chai.expect(isLucky(189237)).to.equal(false);
    chai.expect(isLucky(1098)).to.equal(true);
    chai.expect(isLucky(22869)).to.equal(true);
    chai.expect(isLucky(0)).to.equal(true);
  });
});

mocha.run();
