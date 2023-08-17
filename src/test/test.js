mocha.setup('bdd');

describe(`Ordering the words!`, function () {
  const equal = chai.assert.equal;
  const deepEqual = chai.assert.deepEqual;
  const isDefined = chai.assert.isDefined;
  const isNull = chai.assert.isNull;
  const isTrue = chai.assert.isTrue;
  const isFalse = chai.assert.isFalse;
  const approximately = chai.assert.approximately;
  const oneOf = chai.assert.oneOf;
  const isNotEmpty = chai.assert.isNotEmpty;
  const lengthOf = chai.assert.lengthOf;

  it('Tests', () => {
    equal(orderWord('Hello, World!'), ' !,HWdellloor');
    equal(orderWord('bobby'), 'bbboy');
    equal(orderWord('b'), 'b');
    equal(orderWord(''), 'Invalid String!');
    equal(orderWord('completesolution'), 'ceeillmnooopsttu');
    equal(orderWord('"][@!$*(^&%'), '!"$%&(*@[]^');
    equal(orderWord('i"d][@z!$r(^a&world%'), '!"$%&(@[]^addilorrwz');
    equal(orderWord(null), 'Invalid String!');
    equal(orderWord('cba'), 'abc');
    equal(orderWord('abc'), 'abc');
  });
});

mocha.run();
