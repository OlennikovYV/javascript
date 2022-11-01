mocha.setup('bdd');

describe('Enumerable Magic #20 - Cascading Subsets', () => {
  it('test', () => {
    chai.expect(mixedFraction('567/-399')).to.equal('-1 8/19');
    chai.expect(mixedFraction('1/-2')).to.equal('-1/2');
    chai.expect(mixedFraction('-2/9')).to.equal('-2/9');
    chai.expect(mixedFraction('42/9')).to.equal('4 2/3');
    chai.expect(mixedFraction('6/3')).to.equal('2');
    chai.expect(mixedFraction('1/1')).to.equal('1');
    chai.expect(mixedFraction('11/11')).to.equal('1');
    chai.expect(mixedFraction('4/6')).to.equal('2/3');
    chai.expect(mixedFraction('0/18891')).to.equal('0');
    chai.expect(mixedFraction('-10/7')).to.equal('-1 3/7');
    chai.expect(mixedFraction('-22/-7')).to.equal('3 1/7');
    chai
      .expect(function () {
        mixedFraction('0/0');
      })
      .to.throw();
    chai
      .expect(function () {
        mixedFraction('3/0');
      })
      .to.throw();
  });
});

mocha.run();
