mocha.setup('bdd');

describe('Move 10', () => {
  it('Testing for fixed tests', () => {
    chai.expect(moveTen('testcase')).to.equal('docdmkco');
    chai.expect(moveTen('codewars')).to.equal('mynogkbc');
    chai.expect(moveTen('exampletesthere')).to.equal('ohkwzvodocdrobo');
  });
});

mocha.run();
