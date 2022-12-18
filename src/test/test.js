mocha.setup('bdd');

describe('Geometry Basics: Circle Circumference in 2D', () => {
  it('should pass fixed tests', function () {
    chai
      .expect(
        +circleCircumference(new Circle(new Point(10, 10), 30)).toFixed(6)
      )
      .to.equal(188.495559);
    chai
      .expect(
        +circleCircumference(new Circle(new Point(25, -70), 30)).toFixed(6)
      )
      .to.equal(188.495559);
    chai
      .expect(+circleCircumference(new Circle(new Point(-15, 5), 0)).toFixed(6))
      .to.equal(0);
    chai
      .expect(
        +circleCircumference(new Circle(new Point(-15, 5), 12.5)).toFixed(6)
      )
      .to.equal(78.539816);
  });
});

mocha.run();
