mocha.setup('bdd');

describe('Help Bob count letters and digits', () => {
  it('Should count correctly', function () {
    chai.expect(countLettersAndDigits('hel2!lo')).to.equal(6);
    chai.expect(countLettersAndDigits('n!!_ice!!123')).to.equal(7);
    chai.expect(countLettersAndDigits('1')).to.equal(1);
    chai.expect(countLettersAndDigits('?')).to.equal(0);
    chai.expect(countLettersAndDigits('12345f%%%t5t&/6')).to.equal(10);
    chai.expect(countLettersAndDigits('aBcDeFg090')).to.equal(10);
    chai.expect(countLettersAndDigits('u_n_d_e_r__S_C_O_R_E')).to.equal(10);
  });
});

mocha.run();
