mocha.setup('bdd');

describe(`Fix My Phone Numbers!`, function () {
  const assert = chai.assert;

  it('test', () => {
    assert.equal(isItANum('S:)0207ERGQREG88349F82!efRF)'), '02078834982');
    assert.equal(
      isItANum('sjfniebienvr12312312312ehfWh'),
      'Not a phone number'
    );
    assert.equal(isItANum('0192387415456'), 'Not a phone number');
    assert.equal(
      isItANum('v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165'),
      '02084564165'
    );
    assert.equal(
      isItANum('stop calling me no I have never been in an accident'),
      'Not a phone number'
    );
  });
});

mocha.run();
