mocha.setup('bdd');

describe('Sort arrays - 1', () => {
  it('Testing for fixed tests', () => {
    chai
      .expect(sortme(['one', 'two', 'three']))
      .to.eql(['one', 'three', 'two']);
    chai
      .expect(sortme(['Pphm', 'lahFixsLnm', 'tLTWlBGmj']))
      .eql(['Pphm', 'lahFixsLnm', 'tLTWlBGmj']);
  });
});

mocha.run();
