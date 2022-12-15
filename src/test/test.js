mocha.setup('bdd');

describe('Leap Years', () => {
  it('should detect leap years', function () {
    chai.expect(isLeapYear(1234)).to.equal(false);
    chai.expect(isLeapYear(1984)).to.equal(true);
    chai.expect(isLeapYear(2000)).to.equal(true);
    chai.expect(isLeapYear(2010)).to.equal(false);
    chai.expect(isLeapYear(2013)).to.equal(false);
  });
});

mocha.run();
