mocha.setup('bdd');

describe('Find variable which breaks strict comparison!', () => {
  it('test', () => {
    let x = findStrangeValue();
    chai.expect(x === x).to.equal(false);
  });
});

mocha.run();
