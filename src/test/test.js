mocha.setup('bdd');

describe('Training JS #16: Methods of String object--slice(), substring() and substr()', () => {
  it('test', () => {
    chai.expect(cutIt(['ab', 'cde', 'fgh'])).to.eql(['ab', 'cd', 'fg']);
    chai
      .expect(cutIt(['abc', 'defgh', 'ijklmn']))
      .to.eql(['abc', 'def', 'ijk']);
    chai
      .expect(cutIt(['codewars', 'javascript', 'java']))
      .to.eql(['code', 'java', 'java']);
  });
});

mocha.run();
