mocha.setup('bdd');

describe(`Framed Reflection`, function () {
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
  const error = chai.assert.throws;
  const include = chai.assert.include;

  it('Fixed tests', () => {
    equal(mirror('Hello World'), '*********\n* olleH *\n* dlroW *\n*********');
    equal(mirror('Codewars'), '************\n* srawedoC *\n************');
    equal(
      mirror('sgwgy mwit bfc'),
      '*********\n* ygwgs *\n* tiwm  *\n* cfb   *\n*********'
    );
  });
});

mocha.run();
