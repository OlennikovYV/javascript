mocha.setup('bdd');

describe('Autocomplete! Yay!', () => {
  it('Testing for fixed tests', () => {
    chai
      .expect(autocomplete('ai', ['airplane', 'airport', 'apple', 'ball']))
      .to.eql(['airplane', 'airport']);
  });
});

mocha.run();
