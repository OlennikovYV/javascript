mocha.setup('bdd');

describe('Pythagorean Triple', () => {
  it('Pass these', function () {
    chai.expect(isPythagoreanTriple([3, 4, 5])).to.equal(true);
    chai.expect(isPythagoreanTriple([3, 5, 9])).to.equal(false);
    chai.expect(isPythagoreanTriple([72, 78, 30])).to.equal(true);
  });
});

mocha.run();
