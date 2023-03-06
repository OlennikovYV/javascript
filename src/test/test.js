mocha.setup('bdd');

describe('Reverse a Number', function () {
  it('test', () => {
    chai.expect(reverseNumber(123)).to.equal(321);
    chai.expect(reverseNumber(-123)).to.equal(-321);
    chai.expect(reverseNumber(1000)).to.equal(1);
    chai.expect(reverseNumber(4321234)).to.equal(4321234);
    chai.expect(reverseNumber(5)).to.equal(5);
    chai.expect(reverseNumber(0)).to.equal(0);
    chai.expect(reverseNumber(98989898)).to.equal(89898989);
  });
});

mocha.run();
