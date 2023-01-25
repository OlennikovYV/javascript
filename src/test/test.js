mocha.setup('bdd');

describe("Return a string's even characters.", function () {
  it('Should work for valid strings', () => {
    chai.expect(evenChars('1234')).to.eql(['2', '4']);
    chai.expect(evenChars(';;;--')).to.eql([';', '-']);
    chai
      .expect(evenChars('abcdefghijklm'))
      .to.eql(['b', 'd', 'f', 'h', 'j', 'l']);
  });
  it('Should work for invalid strings', () => {
    chai
      .expect(
        evenChars(
          'aiqbuwbjqwbckjdwbwkqbefhglqhfjbwqejbcadn.bcaw.jbhwefjbwqkvbweevkj.bwvwbhvjk.dsvbajdv.hwuvghwuvfhgw.vjhwncv.wecnaw.ecnvw.kejvhnw.evjkhweqv.kjhwqeev.kjbhdjk.vbaewkjva'
        )
      )
      .to.eql('invalid string');
    chai.expect(evenChars('a')).to.eql('invalid string');
    chai.expect(evenChars('')).to.eql('invalid string');
  });
});

mocha.run();
