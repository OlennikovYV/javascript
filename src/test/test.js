mocha.setup('bdd');

it('test', () => {
  chai.expect(longestPalindrome('a')).to.equal(1);
  chai.expect(longestPalindrome('aa')).to.equal(2);
  chai.expect(longestPalindrome('baa')).to.equal(2);
  chai.expect(longestPalindrome('aab')).to.equal(2);
  chai.expect(longestPalindrome('zyabyz')).to.equal(1);
  chai.expect(longestPalindrome('baabcd')).to.equal(4);
  chai.expect(longestPalindrome('baablkj12345432133d')).to.equal(9);
  chai.expect(longestPalindrome('I like racecars that go fast')).to.equal(7);
  chai.expect(longestPalindrome('abcdefghba')).to.equal(1);
  chai.expect(longestPalindrome('')).to.equal(0);
});

mocha.run();
