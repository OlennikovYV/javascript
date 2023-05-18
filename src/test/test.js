mocha.setup('bdd');

describe(`What's my golf score?`, function () {
  const equal = chai.assert.equal;
  const isDefined = chai.assert.isDefined;

  it('Testing for fixed tests', () => {
    equal(golfScoreCalculator('443454444344544443', '353445334534445344'), -1);
    equal(golfScoreCalculator('123456123456123456', '123456123456123456'), 0);
  });
});

mocha.run();
