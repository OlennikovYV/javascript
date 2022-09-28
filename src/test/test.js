mocha.setup('bdd');

describe('Linked Lists - Length & Count', () => {
  it('linked list length equal 0', function () {
    chai.expect(length(null)).to.equal(0);
  });
  it('linked list length equal 1', function () {
    chai.expect(length(new Node(99))).to.equal(1);
  });
  it('linked list length equal 3', function () {
    chai.expect(length(buildOneTwoThree())).to.equal(3);
  });

  const list = buildOneTwoThree();
  it('count 1', function () {
    chai.expect(count(list, 1)).to.equal(1);
  });
  it('count 2', function () {
    chai.expect(count(list, 2)).to.equal(1);
  });
  it('count 3', function () {
    chai.expect(count(list, 3)).to.equal(1);
  });
  it('count 99', function () {
    chai.expect(count(list, 99)).to.equal(0);
  });
  it('count null', function () {
    chai.expect(count(null, 1)).to.equal(0);
  });
});

mocha.run();
