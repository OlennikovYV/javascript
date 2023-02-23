mocha.setup('bdd');

describe('The Lazy Startup Office', function () {
  it('test', () => {
    chai
      .expect(
        binRota([
          ['Bob', 'Nora'],
          ['Ruby', 'Carl'],
        ])
      )
      .to.eql(['Bob', 'Nora', 'Carl', 'Ruby']);
    chai.expect(binRota([['Billy']])).to.eql(['Billy']);
    chai.expect(binRota([['Billy', 'Nancy']])).to.eql(['Billy', 'Nancy']);
    chai
      .expect(binRota([['Billy'], ['Megan'], ['Aki'], ['Arun'], ['Joy']]))
      .to.eql(['Billy', 'Megan', 'Aki', 'Arun', 'Joy']);
    chai
      .expect(
        binRota([
          [
            'Sam',
            'Nina',
            'Tim',
            'Helen',
            'Gurpreet',
            'Edward',
            'Holly',
            'Eliza',
          ],
          ['Billy', 'Megan', 'Aki', 'Arun', 'Joy', 'Anish', 'Lee', 'Maryan'],
          [
            'Nick',
            'Josh',
            'Pete',
            'Kavita',
            'Daisy',
            'Francesca',
            'Alfie',
            'Macy',
          ],
        ])
      )
      .to.eql([
        'Sam',
        'Nina',
        'Tim',
        'Helen',
        'Gurpreet',
        'Edward',
        'Holly',
        'Eliza',
        'Maryan',
        'Lee',
        'Anish',
        'Joy',
        'Arun',
        'Aki',
        'Megan',
        'Billy',
        'Nick',
        'Josh',
        'Pete',
        'Kavita',
        'Daisy',
        'Francesca',
        'Alfie',
        'Macy',
      ]);
    chai
      .expect(
        binRota([
          ['Stefan', 'Raj', 'Marie'],
          ['Alexa', 'Amy', 'Edward'],
          ['Liz', 'Claire', 'Juan'],
          ['Dee', 'Luke', 'Elle'],
        ])
      )
      .to.eql([
        'Stefan',
        'Raj',
        'Marie',
        'Edward',
        'Amy',
        'Alexa',
        'Liz',
        'Claire',
        'Juan',
        'Elle',
        'Luke',
        'Dee',
      ]);
  });
});

mocha.run();
