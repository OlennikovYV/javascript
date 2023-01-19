mocha.setup('bdd');

describe('Sort Arrays (Ignoring Case)', function () {
  it('Testing for fixed tests', () => {
    chai
      .expect(sortme(['Hello', 'there', "I'm", 'fine']))
      .to.eql(['fine', 'Hello', "I'm", 'there']);
    chai.expect(sortme(['C', 'd', 'a', 'B'])).to.eql(['a', 'B', 'C', 'd']);
    chai.expect(sortme(['CodeWars'])).to.eql(['CodeWars']);
    chai.expect(sortme([])).to.eql([]);
    chai
      .expect(
        sortme([
          'Their',
          'into',
          'Public',
          'small',
          'large',
          'Eye',
          'one',
          'seem',
          'with',
          'Of',
          'To',
        ])
      )
      .to.eql([
        'Eye',
        'into',
        'large',
        'Of',
        'one',
        'Public',
        'seem',
        'small',
        'Their',
        'To',
        'with',
      ]);
  });
});

mocha.run();
