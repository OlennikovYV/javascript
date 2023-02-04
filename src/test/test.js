mocha.setup('bdd');

describe('Very Even" Numbers.', function () {
  const inputs = [0, 4, 12, 222, 5, 45, 4554, 1234, 88, 24, 400000220];
  const expecteds = [
    true,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    true,
    true,
  ];

  for (let i = 0; i < inputs.length; i++) {
    const n = inputs[i];
    const expected = expecteds[i];
    it(`Testing for n = ${n}`, () => {
      let actual = isVeryEvenNumber(n);
      chai.assert.strictEqual(
        actual,
        expected,
        `${n} is ${expected ? '' : 'not '}'Very Even'`
      );
    });
  }
});

mocha.run();
