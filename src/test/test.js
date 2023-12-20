mocha.setup('bdd');

describe(`Help the bookseller !`, function () {
  const equal = chai.assert.equal;
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
    let b, c, res;
    b = ['BBAR 150', 'CDXE 515', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
    c = ['A', 'B', 'C', 'D'];
    res = '(A : 0) - (B : 1290) - (C : 515) - (D : 600)';
    equal(stockList(b, c), res);

    b = ['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'];
    c = ['A', 'B'];
    res = '(A : 200) - (B : 1140)';
    equal(stockList(b, c), res);
  });
});

mocha.run();
