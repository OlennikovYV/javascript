mocha.setup('bdd');

describe('makeBackronym', () => {
  const testCases = [
    ['dgm', 'disturbing gregarious mustache'],
    ['lkj', 'literal klingon joke'],
    [
      'interesting',
      'ingestable newtonian turn eager rant eager stylish turn ingestable newtonian gregarious',
    ],
    [
      'codewars',
      'confident oscillating disturbing eager weird awesome rant stylish',
    ],
  ];
  for (const [input, expected] of testCases)
    it(`Testing for ${JSON.stringify(input)}`, () =>
      chai.expect(makeBackronym(input)).to.equal(expected));
});

mocha.run();
