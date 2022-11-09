mocha.setup('bdd');

describe('Remove All The Marked Elements of a List', () => {
  it('test', () => {
    let l = new Array();

    let integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
    let values_list = [1, 3];
    chai.expect(l.remove_(integer_list, values_list)).to.eql([2, 2, 4]);

    integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
    values_list = [1, 3, 4, 2];
    chai.expect(l.remove_(integer_list, values_list)).to.eql([5, 6, 7, 8]);

    integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3];
    values_list = [2, 4, 3];
    chai.expect(l.remove_(integer_list, values_list)).to.eql([8, 7, 6, 5, 1]);

    integer_list = [4, 4, 2, 3];
    values_list = [2, 2, 4, 3];
    chai.expect(l.remove_(integer_list, values_list)).to.eql([]);

    integer_list = [];
    values_list = [2, 2, 4, 3];
    chai.expect(l.remove_(integer_list, values_list)).to.eql([]);
  });
});

mocha.run();
