mocha.setup('bdd');

describe('Multiply Word in String', () => {
  it('test', () => {
    chai
      .expect(modifyMultiply('This is a string', 3, 5))
      .to.equal('string-string-string-string-string');
    chai
      .expect(
        modifyMultiply(
          "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
          8,
          10
        )
      )
      .to.equal('that-that-that-that-that-that-that-that-that-that');
    chai
      .expect(
        modifyMultiply(
          'Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence',
          1,
          1
        )
      )
      .to.equal('means');
    chai
      .expect(
        modifyMultiply(
          "Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",
          6,
          8
        )
      )
      .to.equal(
        'ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance'
      );
    chai
      .expect(
        modifyMultiply(
          'Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.',
          2,
          5
        )
      )
      .to.equal('around-around-around-around-around');
  });
});

mocha.run();
