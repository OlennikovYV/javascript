mocha.setup('bdd');

describe('Partial Word Searching', function () {
  it('test', () => {
    chai
      .expect(wordSearch('ab', ['za', 'ab', 'abc', 'zab', 'zbc']))
      .to.eql(['ab', 'abc', 'zab']);
    chai
      .expect(wordSearch('aB', ['za', 'ab', 'abc', 'zab', 'zbc']))
      .to.eql(['ab', 'abc', 'zab']);
    chai
      .expect(wordSearch('ab', ['za', 'aB', 'Abc', 'zAB', 'zbc']))
      .to.eql(['aB', 'Abc', 'zAB']);
    chai
      .expect(wordSearch('abcd', ['za', 'aB', 'Abc', 'zAB', 'zbc']))
      .to.eql(['Empty']);
  });
});

mocha.run();
