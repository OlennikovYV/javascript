mocha.setup('bdd');

describe('Grasshopper - Terminal Game Turn Function', function () {
  doTurn();
  it('should roll dice first', function () {
    chai.expect(log[0]).to.equal('rollDice');
  });
  it('should move second', function () {
    chai.expect(log[1]).to.equal('move');
  });
  it('should combat third', function () {
    chai.expect(log[2]).to.equal('combat');
  });
  it('should get coins fourth', function () {
    chai.expect(log[3]).to.equal('getCoins');
  });
  it('should buy health fifth', function () {
    chai.expect(log[4]).to.equal('buyHealth');
  });
  it('should print status sixth', function () {
    chai.expect(log[5]).to.equal('printStatus');
  });
});

mocha.run();
