mocha.setup('bdd');

describe('Triple Trouble', () => {
  it('Testing for fixed tests', () => {
    chai.expect(tripleTrouble('aaa', 'bbb', 'ccc')).to.equal('abcabcabc');
    chai
      .expect(tripleTrouble('aaaaaa', 'bbbbbb', 'cccccc'))
      .to.equal('abcabcabcabcabcabc');
    chai.expect(tripleTrouble('burn', 'reds', 'roll')).to.equal('brrueordlnsl');
    chai.expect(tripleTrouble('Sea', 'urn', 'pms')).to.equal('Supermans');
    chai.expect(tripleTrouble('LLh', 'euo', 'xtr')).to.equal('LexLuthor');
  });
});

mocha.run();
