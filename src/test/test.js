mocha.setup('bdd');

describe('Borrower Speak', function () {
  it('Testing for fixed tests', () => {
    chai.expect(borrow('WhAt! FiCK! DaMn CAke?')).to.equal('whatfickdamncake');
    chai.expect(borrow('THE big PeOpLE Here!!')).to.equal('thebigpeoplehere');
    chai.expect(borrow('i AM a TINY BoY!!')).to.equal('iamatinyboy');
  });
});

mocha.run();
