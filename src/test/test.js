mocha.setup('bdd');

describe('ISBN-10 Validation', () => {
  sampleTests.forEach(([input, expected]) =>
    it('Testing: ' + input, () =>
      chai.expect(validISBN10(input)).to.equal(expected)
    )
  );
});

mocha.run();
