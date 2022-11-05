mocha.setup('bdd');

describe('Fun with ES6 Classes #1 - People, people, people', () => {
  it('test', () => {
    chai.expect(new Person().firstName).to.equal('John');
    chai.expect(new Person().lastName).to.equal('Doe');
    chai.expect(new Person().age).to.equal(0);
    chai.expect(new Person().gender).to.equal('Male');
    chai.expect(new Person().sayFullName()).to.equal('John Doe');
    // Example Custom Test
    chai
      .expect(new Person('Jane', 'Doe', 25, 'Female').firstName)
      .to.equal('Jane');
    chai
      .expect(new Person('Jane', 'Doe', 25, 'Female').lastName)
      .to.equal('Doe');
    chai.expect(new Person('Jane', 'Doe', 25, 'Female').age).to.equal(25);
    chai
      .expect(new Person('Jane', 'Doe', 25, 'Female').gender)
      .to.equal('Female');
    chai
      .expect(new Person('Jane', 'Doe', 25, 'Female').sayFullName())
      .to.equal('Jane Doe');
  });
});

mocha.run();
