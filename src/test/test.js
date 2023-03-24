mocha.setup('bdd');

describe('Hells Kitchen', function () {
  it('Testing for fixed tests', () => {
    const d = new Dictionary();

    d.newEntry('Apple', 'A fruit');
    chai.expect(d.look('Apple')).to.equal('A fruit');

    d.newEntry('Soccer', 'A sport');
    chai.expect(d.look('Soccer')).to.equal('A sport');
    chai.expect(d.look('Hi')).to.equal("Can't find entry for Hi");
    chai.expect(d.look('Ball')).to.equal("Can't find entry for Ball");

    d.newEntry('soccer', 'a sport');
    chai.expect(d.look('soccer')).to.equal('a sport');
  });
});

mocha.run();
