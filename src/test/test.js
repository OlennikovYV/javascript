mocha.setup('bdd');

describe('Binary to Text (ASCII) Conversion', () => {
  it('test', () => {
    // Empty
    chai.expect(binaryToString(''), '');
    //Test apha chars
    chai.expect(binaryToString('01100001'), 'a');
    chai
      .expect(
        binaryToString(
          '01001011010101000100100001011000010000100101100101000101'
        )
      )
      .to.equal('KTHXBYE');

    //Test numeric
    chai
      .expect(binaryToString('00110001001100000011000100110001'))
      .to.equal('1011');

    //Test special chars
    chai.expect(binaryToString('001111000011101000101001')).to.equal('<:)');
  });
});

mocha.run();
