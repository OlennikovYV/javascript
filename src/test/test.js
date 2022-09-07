mocha.setup('bdd');

describe('Tests', () => {
  it('Test', () => {
    chai.expect(letterCount('codewars')).to.eql({
      a: 1,
      c: 1,
      d: 1,
      e: 1,
      o: 1,
      r: 1,
      s: 1,
      w: 1,
    });
    chai.expect(letterCount('activity')).to.eql({
      a: 1,
      c: 1,
      i: 2,
      t: 2,
      v: 1,
      y: 1,
    });
    chai.expect(letterCount('arithmetics')).to.eql({
      a: 1,
      c: 1,
      e: 1,
      h: 1,
      i: 2,
      m: 1,
      r: 1,
      s: 1,
      t: 2,
    });
    chai.expect(letterCount('traveller')).to.eql({
      a: 1,
      e: 2,
      l: 2,
      r: 2,
      t: 1,
      v: 1,
    });
    chai.expect(letterCount('daydreamer')).to.eql({
      a: 2,
      d: 2,
      e: 2,
      m: 1,
      r: 2,
      y: 1,
    });
  });
});

mocha.run();
