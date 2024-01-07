mocha.setup('bdd');

describe(
  `They say that only the name is long enough to attract attention.` +
    ` They also said that only a simple Kata will have someone to solve it.` +
    ` This is a sadly story #1: Are they opposite?`,
  function () {
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
      equal(isOpposite('ab', 'AB'), true);
      equal(isOpposite('aB', 'Ab'), true);
      equal(isOpposite('aBcd', 'AbCD'), true);
      equal(isOpposite('aBcde', 'AbCD'), false);
      equal(isOpposite('AB', 'Ab'), false);
      equal(isOpposite('', ''), false);
    });
  }
);

mocha.run();
