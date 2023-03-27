mocha.setup('bdd');

describe('Trimming a string', function () {
  it('Should pass sample tests', () => {
    chai.expect(trim('Creating kata is fun', 14)).to.equal('Creating ka...');
    chai.expect(trim('He', 1)).to.equal('H...');
    chai
      .expect(trim('Code Wars is pretty rad', 50))
      .to.equal('Code Wars is pretty rad');
    chai.expect(trim('aWtI prI kp', 2)).to.equal('aW...');
    chai.expect(trim('Hey', 3)).to.equal('Hey');
    chai.expect(trim('Code Wars is pretty rad', 3)).to.equal('Cod...');
  });
});

mocha.run();
