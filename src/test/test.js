mocha.setup('bdd');

describe('Improving Math.round(x)', () => {
  it('test', () => {
    chai.expect(Math.roundTo(4, 5)).to.equal(4);
    chai.expect(Math.roundTo(4.1235343424, 6)).to.equal(4.123534);
    chai.expect(Math.roundTo(5.3035802, 3)).to.equal(5.304);
    chai
      .expect(Math.roundTo(0.9384930193848595, 15))
      .to.equal(0.93849301938486);
    chai.expect(Math.roundTo(9.9999, 3)).to.equal(10);
  });
  it('test PI', () => {
    chai.expect(Math.roundTo(3.141592653589793, 10)).to.equal(3.1415926536);
    chai.expect(Math.roundTo(3.141592653589793, 9)).to.equal(3.141592654);
    chai.expect(Math.roundTo(3.141592653589793, 8)).to.equal(3.14159265);
    chai.expect(Math.roundTo(3.141592653589793, 7)).to.equal(3.1415927);
    chai.expect(Math.roundTo(3.141592653589793, 6)).to.equal(3.141593);
    chai.expect(Math.roundTo(3.141592653589793, 5)).to.equal(3.14159);
    chai.expect(Math.roundTo(3.141592653589793, 4)).to.equal(3.1416);
    chai.expect(Math.roundTo(3.141592653589793, 3)).to.equal(3.142);
    chai.expect(Math.roundTo(3.141592653589793, 2)).to.equal(3.14);
    chai.expect(Math.roundTo(3.141592653589793, 1)).to.equal(3.1);
  });
});

mocha.run();
