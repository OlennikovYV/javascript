mocha.setup('bdd');

describe(`ReOrdering`, function () {
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

  it('test', () => {
    equal(reOrdering('ming Yao'), 'Yao ming');
    equal(reOrdering('Mano donowana'), 'Mano donowana');
    equal(reOrdering('wario LoBan hello'), 'LoBan wario hello');
    equal(reOrdering('bull color pig Patrick'), 'Patrick bull color pig');
    equal(
      reOrdering('jojo ddjajdiojdwo ana G nnibiial'),
      'G jojo ddjajdiojdwo ana nnibiial'
    );
    equal(
      reOrdering(
        'is one of those rare names that s both exotic and simple Adira'
      ),
      'Adira is one of those rare names that s both exotic and simple'
    );
    equal(
      reOrdering(
        'is an older name than annabel Amabel and a lot more distinctive'
      ),
      'Amabel is an older name than annabel and a lot more distinctive'
    );
    equal(reOrdering('JoJo'), 'JoJo');
    equal(
      reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z'),
      'Z a b c d e f g h i j k l m n o p q r s t u v w x y'
    );
    equal(
      reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z'),
      'N a b c d e f g h i j k l m o p q r s t u v w x y z'
    );
  });
});

mocha.run();
