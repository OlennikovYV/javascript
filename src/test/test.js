mocha.setup('bdd');

describe('Unique string characters', function () {
  it('test', () => {
    chai.expect(solve('xyab', 'xzca')).to.equal('ybzc');
    chai.expect(solve('xyabb', 'xzca')).to.equal('ybbzc');
    chai.expect(solve('abcd', 'xyz')).to.equal('abcdxyz');
    chai.expect(solve('xxx', 'xzca')).to.equal('zca');
  });
});

mocha.run();
