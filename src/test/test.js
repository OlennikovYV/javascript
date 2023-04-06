mocha.setup('bdd');

describe('Count words', function () {
  it('should work in basic form of problem', function () {
    chai.expect(countWords('Hello')).to.equal(1);
    chai.expect(countWords('Hello, World!')).to.equal(2);
    chai.expect(
      countWords(
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ),
      19
    );
    chai.expect(countWords('')).to.equal(0);
    chai
      .expect(countWords('With! Symbol@ #Around! (Every) %Word$'))
      .to.equal(5);
    chai
      .expect(countWords('Dear   Victoria, I love  to press   space button.'))
      .to.equal(8);
  });

  it('should work with spaces around string', function () {
    chai.expect(countWords(' Arthur ')).to.equal(1);
    chai.expect(countWords(' David')).to.equal(1);
    chai.expect(countWords('Nelson ')).to.equal(1);
    chai.expect(countWords('  Hello Gomer  ')).to.equal(2);
    chai.expect(countWords('  Hello     Bart  ')).to.equal(2);
  });

  it('should work with non-whitespace (ex. breakspace) chars', function () {
    chai.expect(countWords('﻿Hello﻿World ')).to.equal(2);
    chai.expect(countWords('Hello﻿World')).to.equal(2);
  });
});

mocha.run();
