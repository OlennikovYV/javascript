mocha.setup('bdd');

describe('Previous multiple of three', function () {
  const answer = [null, null, 36, 12, 9];
  [1, 25, 36, 1244, 952406].forEach((q, i) =>
    it(`n = ${q}`, function () {
      chai.expect(prevMultOfThree(q)).to.equal(answer[i]);
    })
  );
});

mocha.run();
