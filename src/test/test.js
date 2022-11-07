mocha.setup('bdd');

describe('shorter concat [reverse longer]', () => {
  it('test', () => {
    chai
      .expect(shorter_reverse_longer('first', 'abcde'))
      .to.equal('abcdetsrifabcde');
    chai.expect(shorter_reverse_longer('hello', 'bau')).to.equal('bauollehbau');
    chai
      .expect(shorter_reverse_longer('fghi', 'abcde'))
      .to.equal('fghiedcbafghi');
  });
});

mocha.run();
