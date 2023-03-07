mocha.setup('bdd');

describe('Area of a Square', function () {
  it('squareArea(2)', function () {
    chai.expect(squareArea(2)).to.equal(1.62);
  });

  it('squareArea(0)', function () {
    chai.expect(squareArea(0)).to.equal(0);
  });

  it('squareArea(14.05)', function () {
    chai.expect(squareArea(14.05)).to.equal(80);
  });
});

mocha.run();
