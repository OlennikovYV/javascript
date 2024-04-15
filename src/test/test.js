mocha.setup('bdd');

describe(`Thinkful - String Drills: Areacode extractor`, function () {
  const equal = chai.assert.equal;
  const strictEqual = chai.assert.strictEqual;
  const notEqual = chai.assert.notEqual;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isUndefined = chai.assert.isUndefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('Basic tests', function () {
    strictEqual(
      areaCode("The supplier's phone number is (555) 867-5309"),
      '555'
    );
    strictEqual(
      areaCode("Grae's cell number used to be (123) 456-7890"),
      '123'
    );
    strictEqual(
      areaCode("The 102nd district court's fax line is (124) 816-3264"),
      '124'
    );
  });
});

mocha.run();
