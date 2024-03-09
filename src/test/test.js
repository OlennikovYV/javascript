mocha.setup('bdd');

describe(`Sushi-go-round (Beginner's)`, function () {
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
    equal(
      totalBill('rr'),
      4,
      `Input:'rr' Expect ${totalBill('rr')} to equal 4`
    );
    equal(
      totalBill('rr rrr'),
      8,
      `Input:'rr rrr' Expect ${totalBill('rr rrr')} to equal 8`
    );
    equal(
      totalBill('rr rrr rrr rr'),
      16,
      `Input:'rr rrr rrr rr' Expect ${totalBill('rr rrr rrr rr')}  to equal 16`
    );
    equal(
      totalBill('rrrrrrrrrrrrrrrrrr   rr r'),
      34,
      `Input:'rrrrrrrrrrrrrrrrrr   rr r' Expect ${totalBill(
        'rrrrrrrrrrrrrrrrrr   rr r'
      )} to equal 34`
    );
    equal(totalBill(''), 0, `Input:'' Expect ${totalBill('')} to equal 0`);
  });
});

mocha.run();
