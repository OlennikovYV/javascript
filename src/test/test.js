mocha.setup('bdd');

describe('Initial test', () => {
  it('Testing for fixed tests', () => {
    chai
      .expect(vowel2index('this is my string'))
      .to.equal('th3s 6s my str15ng');
    chai
      .expect(vowel2index('Codewars is the best site in the world'))
      .to.equal('C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld');
    chai
      .expect(vowel2index('Tomorrow is going to be raining'))
      .to.equal('T2m4rr7w 10s g1415ng t20 b23 r2627n29ng');
    chai.expect(vowel2index('')).to.equal('');
  });
});

mocha.run();
