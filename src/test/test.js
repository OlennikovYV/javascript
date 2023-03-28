mocha.setup('bdd');

describe('The Office VI - Sabbatical', function () {
  it('Testing for fixed tests', () => {
    chai
      .expect(sabb('Can I have a sabbatical?', 5, 5))
      .to.equal('Sabbatical! Boom!');
    chai
      .expect(sabb('Why are you shouting?', 7, 2))
      .to.equal('Back to your desk, boy.');
    chai
      .expect(sabb('What do you mean I cant learn to code??', 8, 9))
      .to.equal('Sabbatical! Boom!');
    chai
      .expect(sabb('Please calm down', 9, 1))
      .to.equal('Back to your desk, boy.');
  });
});

mocha.run();
