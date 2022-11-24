mocha.setup('bdd');

describe('JavaScript class-like objects', () => {
  it('test', () => {
    var dog = new Animal('Max', 'dog');

    chai.expect(dog.toString()).to.equal('Max is a dog');
    chai.expect(dog.type).to.equal('dog');
    chai.expect(dog.name).to.equal('Max');

    dog.name = 'Lassie';
    chai.expect(dog.name).to.equal('Lassie');
  });
});

mocha.run();
