mocha.setup('bdd');

describe('Correct the time-string', () => {
  it('test', () => {
    // Null or Empty
    chai.expect(timeCorrect(null)).to.equal(null);
    chai.expect(timeCorrect('')).to.equal('');

    // Invalid Format
    chai.expect(timeCorrect('001122')).to.equal(null);
    chai.expect(timeCorrect('00;11;22')).to.equal(null);
    chai.expect(timeCorrect('0a:1c:22')).to.equal(null);

    // Correction Tests
    chai.expect(timeCorrect('09:10:01')).to.equal('09:10:01');
    chai.expect(timeCorrect('11:70:10')).to.equal('12:10:10');
    chai.expect(timeCorrect('19:99:09')).to.equal('20:39:09');
    chai.expect(timeCorrect('19:99:99')).to.equal('20:40:39');
    chai.expect(timeCorrect('24:01:01')).to.equal('00:01:01');
    chai.expect(timeCorrect('52:01:01')).to.equal('04:01:01');
  });
});

mocha.run();
