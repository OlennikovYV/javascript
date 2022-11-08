mocha.setup('bdd');

describe('Palindrome chain length', () => {
  it('Palindromes', () => {
    chai.expect(palindromeChainLength(1)).to.equal(0);
    chai.expect(palindromeChainLength(88)).to.equal(0);
  });
  it('Not palindromes', () => {
    chai.expect(palindromeChainLength(87)).to.equal(4);
    chai.expect(palindromeChainLength(89)).to.equal(24);
    chai.expect(palindromeChainLength(10)).to.equal(1);
  });
});

mocha.run();
