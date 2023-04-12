mocha.setup('bdd');

describe('Unexpected parsing', function () {
  it('test', () => {
    chai.expect(getStatus(true).status).to.equal('busy');
  });
});

mocha.run();
