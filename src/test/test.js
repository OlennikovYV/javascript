mocha.setup('bdd');

describe('Scrolling Text', () => {
  it('test', () => {
    chai.expect(scrollingText('abc')).to.eql(['ABC', 'BCA', 'CAB']);
  });
});

mocha.run();
