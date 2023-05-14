mocha.setup('bdd');

describe(`sPoNgEbOb MeMe`, function () {
  const equal = chai.assert.equal;
  const isDefined = chai.assert.isDefined;

  it(`testing ${JSON.stringify('stop Making spongebob Memes!')}`, () => {
    let actual = spongeMeme('stop Making spongebob Memes!');

    isDefined(
      actual,
      "The function didn't return anything. Did you print the result instead?"
    );
    equal(actual, 'StOp mAkInG SpOnGeBoB MeMeS!');
  });
});

mocha.run();
