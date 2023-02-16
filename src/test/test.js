mocha.setup('bdd');

describe('Linked Lists - Get Nth Node', function () {
  var list = buildOneTwoThree();

  it('', function () {
    chai
      .expect(getNth(list, 0).data)
      .to.equal(1, 'First node should be located at index 0.');
    chai
      .expect(getNth(list, 1).data)
      .to.equal(2, 'Second node should be located at index 1.');
    chai
      .expect(getNth(list, 2).data)
      .to.equal(3, 'Third node should be located at index 2.');

    let fn = function () {
      getNth(list, 3);
    };
    chai.expect(fn).to.throw();

    fn = function () {
      getNth(list, 100);
    };
    chai.expect(fn).to.throw();

    fn = function () {
      getNth(nult, 0);
    };
    chai.expect(fn).to.throw();
  });
});

mocha.run();
