mocha.setup('bdd');

describe('Drone Fly-By', () => {
  it('Testing for fixed tests', () => {
    chai.expect(flyBy('xxxxxx', '====T')).to.equal('ooooox');
    chai.expect(flyBy('xxxxxxxxx', '==T')).to.equal('oooxxxxxx');
    chai
      .expect(flyBy('xxxxxxxxxxxxxxx', '=========T'))
      .to.equal('ooooooooooxxxxx');
  });
});

mocha.run();
