mocha.setup('bdd');

describe('Linked Lists - Push & BuildOneTwoThree', function () {
  it('tests for inserting a node before another node.', function () {
    chai.expect(push(null, 1).data).to.equal(1);
    chai.expect(push(null, 1).next).to.equal(null);
    chai.expect(push(new Node(1), 2).data).to.equal(2);
    chai.expect(push(new Node(1), 2).next.data).to.equal(1);
  });

  it('tests for building a linked list.', function () {
    chai.expect(buildOneTwoThree().data).to.equal(1);
    chai.expect(buildOneTwoThree().next.data).to.equal(2);
    chai.expect(buildOneTwoThree().next.next.data).to.equal(3);
    chai.expect(buildOneTwoThree().next.next.next).to.equal(null);
  });
});

mocha.run();
