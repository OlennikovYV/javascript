mocha.setup('bdd');

describe('Geometry Basics: Circle Area in 2D', function () {
  it('test', () => {
    chai
      .expect(+circleArea(new Circle(new Point(10, 10), 30)).toFixed(6))
      .to.equal(2827.433388);
    chai
      .expect(+circleArea(new Circle(new Point(25, -70), 30)).toFixed(6))
      .to.equal(2827.433388);
    chai
      .expect(+circleArea(new Circle(new Point(-15, 5), 0)).toFixed(6))
      .to.equal(0);
    chai
      .expect(+circleArea(new Circle(new Point(-15, 5), 12.5)).toFixed(6))
      .to.equal(490.873852);
  });
});

mocha.run();
