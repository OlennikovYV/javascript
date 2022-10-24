mocha.setup('bdd');

describe('Create Phone Number', () => {
  it('Fixed tests', () => {
    chai
      .expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
      .to.equal('(123) 456-7890');
    chai
      .expect(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))
      .to.equal('(111) 111-1111');
    chai
      .expect(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
      .to.equal('(123) 456-7890');
  });
});

mocha.run();
