mocha.setup('bdd');

describe('Make the Deadfish Swim', () => {
  it('test', () => {
    chai.expect(parse('iiisdoso')).to.eql([8, 64]);
    chai.expect(parse('iiisxxxdoso')).to.eql([8, 64]);
  });
});

mocha.run();
