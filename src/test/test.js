mocha.setup('bdd');

describe('Pick peaks', function () {
  it('Tests', function () {
    chai
      .expect(capMe(['jo', 'nelson', 'jurie']))
      .to.eql(['Jo', 'Nelson', 'Jurie']);
    chai
      .expect(capMe(['KARLY', 'DANIEL', 'KELSEY']))
      .to.eql(['Karly', 'Daniel', 'Kelsey']);
  });
});

mocha.run();
