mocha.setup('bdd');

describe('Area of a Circle', function () {
  it('Testing for fixed tests', () => {
    chai.expect(circleArea(-1485.86)).to.equal(false);
    chai.expect(circleArea(0)).to.equal(false);
    chai.expect(circleArea(43.2673)).to.equal(5881.25);
    chai.expect(circleArea(68)).to.equal(14526.72);
    chai.expect(circleArea('number')).to.equal(false);
  });
});

mocha.run();
