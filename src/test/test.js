mocha.setup('bdd');

describe(`Reverse Vowels In A String`, function () {
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

  it('test', () => {
    strictEqual(reverseVowels('Apache'), 'epachA');
    strictEqual(reverseVowels('Hello!'), 'Holle!');
    strictEqual(reverseVowels('Tomatoes'), 'Temotaos');
    strictEqual(
      reverseVowels('Reverse Vowels In A String'),
      'RivArsI Vewols en e Streng'
    );
    strictEqual(reverseVowels('Oh my goodness'), 'eh my goodnOss');
    strictEqual(
      reverseVowels('The quick brown fox jumped over the lazy dog'),
      'Tho qaeck brewn fox jempud ovor thi luzy deg'
    );
  });
});

mocha.run();
