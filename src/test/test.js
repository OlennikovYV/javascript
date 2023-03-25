mocha.setup('bdd');

describe('Show multiples of 2 numbers within a range', function () {
  it('should test for s1=2 s2=4 s3=40', function () {
    s1 = 2;
    s2 = 4;
    s3 = 40;
    chai
      .expect(multiples(s1, s2, s3))
      .to.eql([4, 8, 12, 16, 20, 24, 28, 32, 36]);
  });

  it('should test for s1=13 s2=5 s3=800', function () {
    s1 = 13;
    s2 = 5;
    s3 = 800;
    chai
      .expect(multiples(s1, s2, s3))
      .to.eql([65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]);
  });

  it('should test for s1=13 s2=15 s3=800', function () {
    s1 = 13;
    s2 = 15;
    s3 = 800;
    chai.expect(multiples(s1, s2, s3)).to.eql([195, 390, 585, 780]);
  });

  it('should test for s1=17 s2=15 s3=800', function () {
    s1 = 17;
    s2 = 15;
    s3 = 800;
    chai.expect(multiples(s1, s2, s3)).to.eql([255, 510, 765]);
  });

  it('should test for s1=27 s2=29 s3=2000', function () {
    s1 = 27;
    s2 = 29;
    s3 = 2000;
    chai.expect(multiples(s1, s2, s3)).to.eql([783, 1566]);
  });
});

mocha.run();
