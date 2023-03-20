mocha.setup('bdd');

describe('Multiples!', function () {
  it('fixed tests', () => {
    chai.expect(multiple(30)).to.equal('BangBoom');
    chai.expect(multiple(3)).to.equal('Bang');
    chai.expect(multiple(98)).to.equal('Miss');
    chai.expect(multiple(65)).to.equal('Boom');
    chai.expect(multiple(23)).to.equal('Miss');
    chai.expect(multiple(15)).to.equal('BangBoom');
  });
});

mocha.run();
