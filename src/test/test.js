mocha.setup('bdd');

describe('Changing letters', () => {
  it('sample tests', () => {
    chai.expect(swap('')).to.equal('');
    chai.expect(swap('   @@@')).to.equal('   @@@');
    chai.expect(swap('HelloWorld!')).to.equal('HEllOWOrld!');
    chai.expect(swap('Sunday')).to.equal('SUndAy');
    chai.expect(swap('Codewars')).to.equal('COdEwArs');
    chai.expect(swap('Monday')).to.equal('MOndAy');
    chai.expect(swap('Friday')).to.equal('FrIdAy');
    chai.expect(swap('abracadabra')).to.equal('AbrAcAdAbrA');
    chai.expect(swap('AbrAcAdAbrA')).to.equal('AbrAcAdAbrA');
    chai.expect(swap('ABRACADABRA')).to.equal('ABRACADABRA');
    chai.expect(swap('aBRaCaDaBRa')).to.equal('ABRACADABRA');
  });
});

mocha.run();
