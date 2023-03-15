mocha.setup('bdd');

describe('Dominant array elements', function () {
  it('test', () => {
    chai.expect(solve([16, 17, 14, 3, 14, 5, 2])).to.eql([17, 14, 5, 2]);
    chai.expect(solve([92, 52, 93, 31, 89, 87, 77, 105])).to.eql([105]);
    chai.expect(solve([75, 47, 42, 56, 13, 55])).to.eql([75, 56, 55]);
    chai.expect(solve([67, 54, 27, 85, 66, 88, 31, 24, 49])).to.eql([88, 49]);
    chai.expect(solve([76, 17, 25, 36, 29])).to.eql([76, 36, 29]);
    chai.expect(solve([104, 18, 37, 9, 36, 47, 28])).to.eql([104, 47, 28]);
  });
});

mocha.run();
