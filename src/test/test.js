mocha.setup('bdd');

describe(`Ghostbusters (whitespace removal)`, function () {
  const assert = chai.expect;

  it('test', () => {
    assert(ghostBusters('Factor y')).to.equal('Factory');
    assert(ghostBusters('O  f fi ce')).to.equal('Office');
    assert(ghostBusters('BusStation')).to.equal(
      "You just wanted my autograph didn't you?"
    );
  });
});

mocha.run();
