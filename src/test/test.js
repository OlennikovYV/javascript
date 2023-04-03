mocha.setup('bdd');

describe('Naughty or Nice?', function () {
  it('test', () => {
    function justNames(array) {
      return array.map(function (e) {
        return e.name;
      });
    }

    let naughty = [{ name: 'xDranik', wasNice: false }];
    let nice = [
      { name: 'Santa', wasNice: true },
      { name: 'Warrior reading this kata', wasNice: true },
    ];

    chai.expect(getNiceNames(naughty)).to.eql([]);
    chai.expect(getNaughtyNames(nice)).to.eql([]);

    chai.expect(getNiceNames(nice.concat(naughty))).to.eql(justNames(nice));
    chai
      .expect(getNaughtyNames(nice.concat(naughty)))
      .to.eql(justNames(naughty));
  });
});

mocha.run();
