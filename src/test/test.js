mocha.setup('bdd');

describe('Substring fun', function () {
  it('Testing for fixed tests', () => {
    chai.expect(nthChar([])).to.equal('');
    chai.expect(nthChar(['yoda', 'best', 'has'])).to.equal('yes');
  });
});

mocha.run();
