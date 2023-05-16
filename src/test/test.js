mocha.setup('bdd');

describe(`Sum a list but ignore any duplicates`, function () {
  const equal = chai.assert.equal;
  const isDefined = chai.assert.isDefined;

  it('test', () => {
    equal(pattern(1), '1');
    equal(pattern(2), '12\n2');
    equal(pattern(5), '12345\n2345\n345\n45\n5');
  });
});

mocha.run();
