mocha.setup('bdd');

describe('Limit string length - 1', () => {
  it('test', () => {
    chai.expect(solution('Testing String', 3)).to.equal('Tes...');
    chai.expect(solution('Testing String', 8)).to.equal('Testing ...');
    chai.expect(solution('Test', 8)).to.equal('Test');
  });
});

mocha.run();
