mocha.setup('bdd');

describe('Tests', () => {
  it('test', () => {
    chai.expect(barTriang([4, 6], [12, 4], [10, 10])).to.eql([8.6667, 6.6667]);
    chai.expect(barTriang([4, 2], [12, 2], [6, 10])).to.eql([7.3333, 4.6667]);
    chai.expect(barTriang([4, 8], [8, 2], [16, 6])).to.eql([9.3333, 5.3333]);
    chai.expect(barTriang([0, 0], [1, 3], [-1, 6])).to.eql([0, 3]);
    chai.expect(barTriang([0, 0], [1, 6], [8, -6])).to.eql([3, 0]);
  });
});

mocha.run();
