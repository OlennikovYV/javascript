mocha.setup('bdd');

describe('Chain me', () => {
  it('Tests to see if your function returns the correct values.', () => {
    chai.expect(chain(2, [add, mult])).to.equal(360);
  });
});

mocha.run();
