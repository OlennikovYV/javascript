mocha.setup('bdd');

describe('Training JS #21: Methods of String object--trim() and the string template', () => {
  it('test', () => {
    chai.expect(fiveLine('  a')).to.equal('a\naa\naaa\naaaa\naaaaa');
    chai
      .expect(fiveLine('\txy \n'))
      .to.equal('xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy');
    chai
      .expect(fiveLine('           Ok               '))
      .to.equal('Ok\nOkOk\nOkOkOk\nOkOkOkOk\nOkOkOkOkOk');
  });
});

mocha.run();
