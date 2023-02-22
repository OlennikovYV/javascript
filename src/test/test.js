mocha.setup('bdd');

describe('Filter Coffee', function () {
  it('test', () => {
    chai.expect(search(3, [6, 1, 2, 9, 2])).to.eql('1,2,2');
    chai.expect(search(14, [7, 3, 23, 9, 14, 20, 7])).to.eql('3,7,7,9,14');
    chai.expect(search(0, [6, 1, 2, 9, 2])).to.eql('');
  });
});

mocha.run();
