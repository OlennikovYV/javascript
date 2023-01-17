mocha.setup('bdd');

describe('Compare Strings by Sum of Chars', function () {
  it('sample tests', () => {
    chai.expect(compare('AD', 'BC')).to.equal(true);
    chai.expect(compare('AD', 'DD')).to.equal(false);
    chai.expect(compare('gf', 'FG')).to.equal(true);
    chai.expect(compare('Ad', 'DD')).to.equal(false);
    chai.expect(compare('zz1', '')).to.equal(true);
    chai.expect(compare('ZzZz', 'ffPFF')).to.equal(true);
    chai.expect(compare('kl', 'lz')).to.equal(false);
    chai.expect(compare('!!', '7476')).to.equal(true);
    chai.expect(compare('##', '1176')).to.equal(true);

    chai.expect(compare(null, 'BC')).to.equal(false);
    chai.expect(compare(null, null)).to.equal(true);
    chai.expect(compare(null, '')).to.equal(true);
    chai.expect(compare('', '')).to.equal(true);
  });
});

mocha.run();
