mocha.setup('bdd');

describe('Count consonants', function () {
  it('test', () => {
    chai.expect(consonantCount('')).to.equal(0);
    chai.expect(consonantCount('aaaaa')).to.equal(0);
    chai.expect(consonantCount('XaeiouX')).to.equal(2);
    chai.expect(consonantCount('Bbbbb')).to.equal(5);
    chai.expect(consonantCount('helLo world'), 7);
    chai.expect(consonantCount('h^$&^#$&^elLo world')).to.equal(7);
    chai.expect(consonantCount('0123456789')).to.equal(0);
    chai.expect(consonantCount('012345_Cb')).to.equal(2);
  });
});

mocha.run();
