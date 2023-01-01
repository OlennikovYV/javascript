mocha.setup('bdd');

describe('Scaling Squared Strings', () => {
  it('test', () => {
    const a = 'abcd\nefgh\nijkl\nmnop';
    const r =
      'aabbccdd\naabbccdd\naabbccdd\neeffgghh\neeffgghh\neeffgghh\niijjkkll\niijjkkll\niijjkkll\nmmnnoopp\nmmnnoopp\nmmnnoopp';

    chai.expect(scale(a, 2, 3)).to.equal(r);
    chai.expect(scale('', 5, 5)).to.equal('');
    chai.expect(scale('Kj\nSH', 1, 2)).to.equal('Kj\nKj\nSH\nSH');
  });
});

mocha.run();
