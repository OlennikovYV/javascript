mocha.setup('bdd');

describe(`Greed`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('test', () => {
    deepEqual(
      getQuotes(
        '"Winners never quit and quitters never win." - Vince Lombardi, "My motto is, \'Never quit.\'" - Henry Rollins'
      ),
      [
        '"Winners never quit and quitters never win."',
        '"My motto is, \'Never quit.\'"',
      ]
    );
  });
});

mocha.run();
