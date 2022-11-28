mocha.setup('bdd');

describe('Remove the parentheses', () => {
  it('Basic Tests', function () {
    chai
      .expect(removeParentheses('example(unwanted thing)example'))
      .to.equal('exampleexample');
    chai
      .expect(removeParentheses('example (unwanted thing) example'))
      .to.equal('example  example');
    chai.expect(removeParentheses('a (bc d)e')).to.equal('a e');
    chai.expect(removeParentheses('a(b(c))')).to.equal('a');
    chai
      .expect(
        removeParentheses('hello example (words(more words) here) something')
      )
      .to.equal('hello example  something');
    chai
      .expect(removeParentheses('(first group) (second group) (third group)'))
      .to.equal('  ');
  });
});

mocha.run();
