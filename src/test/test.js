mocha.setup('bdd');

describe('Numbers to Objects', function () {
  it('Testing for fixed tests', () => {
    chai
      .expect(numObj([118, 117, 120]))
      .to.eql([{ 118: 'v' }, { 117: 'u' }, { 120: 'x' }]);
    chai
      .expect(numObj([101, 121, 110, 113, 113, 103]))
      .to.eql([
        { 101: 'e' },
        { 121: 'y' },
        { 110: 'n' },
        { 113: 'q' },
        { 113: 'q' },
        { 103: 'g' },
      ]);
  });
});

mocha.run();
