mocha.setup('bdd');

describe('Grasshopper - Object syntax debug', () => {
  it('Fixed tests', () => {
    chai
      .expect(formatWords(['one', 'two', 'three', 'four']))
      .to.equal('one, two, three and four');
    chai.expect(formatWords(['one'])).to.equal('one');
    chai.expect(formatWords(['one', '', 'three'])).to.equal('one and three');
    chai.expect(formatWords(['', '', 'three'])).to.equal('three');
    chai.expect(formatWords(['one', 'two', ''])).to.equal('one and two');
    chai
      .expect(formatWords([]))
      .to.equal('', 'formatWords([]) should return ""');
    chai.expect(formatWords(null)).to.equal('');
    chai.expect(formatWords([''])).to.equal('');
  });
});

mocha.run();
