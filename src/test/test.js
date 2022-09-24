mocha.setup('bdd');

describe('"this" is a problem', () => {
  it('test', () => {
    const n = new NameMe('John', 'Doe');
    chai.expect(typeof n.firstName != undefined && n.firstName == 'John');
    chai.expect(typeof n.lastName != undefined && n.lastName == 'Doe');
    chai.expect(typeof n.name != undefined && n.name == 'John Doe');
  });
});

mocha.run();
