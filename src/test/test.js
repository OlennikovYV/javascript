mocha.setup('bdd');

describe('See You Next Happy Year', function () {
  it('test', () => {
    chai.expect(nextHappyYear(1001)).to.equal(1023);
    chai.expect(nextHappyYear(1123)).to.equal(1203);
    chai.expect(nextHappyYear(2001)).to.equal(2013);
    chai.expect(nextHappyYear(2334)).to.equal(2340);
    chai.expect(nextHappyYear(3331)).to.equal(3401);
    chai.expect(nextHappyYear(1987)).to.equal(2013);
    chai.expect(nextHappyYear(5555)).to.equal(5601);
    chai.expect(nextHappyYear(7712)).to.equal(7801);
    chai.expect(nextHappyYear(8088)).to.equal(8091);
    chai.expect(nextHappyYear(8999)).to.equal(9012);
  });
});

mocha.run();
