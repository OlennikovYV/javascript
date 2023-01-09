mocha.setup('bdd');

describe('Javascript filter - 1', function () {
  it('Basic list', function () {
    const a = [
        ['foo', 'foo@foo.com'],
        ['bar_', 'bar@bar.com'],
      ],
      b = [['bar_', 'bar@bar.com']];
    chai.expect(searchNames(a).join(':')).to.equal(b.join(':'));
  });
});

mocha.run();
