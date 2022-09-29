mocha.setup('bdd');

describe('Initialize my name', () => {
  it('Initialize Names', function () {
    chai.expect(initializeNames('Jack Ryan')).to.equal('Jack Ryan', '');
    chai.expect(initializeNames('Lois Mary Lane')).to.equal('Lois M. Lane', '');
    chai.expect(initializeNames('Dimitri')).to.equal('Dimitri', '');
    chai
      .expect(initializeNames('Alice Betty Catherine Davis'))
      .to.equal('Alice B. C. Davis', '');
  });
});

mocha.run();
