mocha.setup('bdd');

describe('Grasshopper - Object syntax debug', () => {
  it('test', () => {
    chai.expect(rooms).to.be.an('object');
  });
});

mocha.run();
