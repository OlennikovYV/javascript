mocha.setup('bdd');

const nameTask = `Find Added`;

describe(nameTask, function () {
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
  const noError = chai.assert.doesNotThrow;
  const include = chai.assert.include;
  /* Утверждает, что подмножество включено в надмножество в том же порядке,
    начиная с первого элемента в надмножестве. Использует глубокую проверку
    равенства.
    Например: [{b:1},{a:2}] === [{b:1},{a:2}] */
  const includeDeepOrderedMembers = chai.assert.includeDeepOrderedMembers;

  it('Tests', () => {
    strictEqual(
      findAdded('44554466', '447554466'),
      '7',
      "Expected  '7', got " + findAdded('44554466', '447554466')
    );
    strictEqual(
      findAdded('9876521', '9876543211'),
      '134',
      "Expected  '134', got " + findAdded('9876521', '447554466')
    );
    strictEqual(
      findAdded('4455446', '447555446666'),
      '56667',
      "Expected  '56667', got " + findAdded('4455446', '447555446666')
    );
    strictEqual(
      findAdded('678', '876'),
      '',
      "Expected  '', got " + findAdded('678', '876')
    );
    strictEqual(
      findAdded('678', '6'),
      '',
      "Expected  '', got " + findAdded('678', '6')
    );
  });
});

mocha.run();
