mocha.setup('bdd');

describe('pick a set of first elements', () => {
  it('test', () => {
    const arr = ['a', 'b', 'c', 'd', 'e'];
    chai.expect(first(arr)).to.eql(['a']);
    chai.expect(first(arr, 2)).to.eql(['a', 'b']);
  });
});

mocha.run();
