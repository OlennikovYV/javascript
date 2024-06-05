function pairOfShoes(shoes) {
  const serialize = arr => arr.sort().join();

  const pairs = shoes.reduce(
    (listSides, [side, size]) => (listSides[side].push(size), listSides),
    [[], []]
  );
  return serialize(pairs[0]) === serialize(pairs[1]);
}

function doTest(shoes, expected) {
  const log = `for shoes: ${JSON.stringify(shoes)}`;
  const actual = pairOfShoes(shoes);

  console.log(String(actual === expected) + ' ' + log);
}

doTest(
  [
    [0, 20],
    [0, 21],
    [1, 19],
    [1, 22],
  ],
  false
);
doTest(
  [
    [0, 21],
    [1, 23],
    [1, 21],
    [0, 23],
  ],
  true
);
doTest(
  [
    [0, 23],
    [1, 23],
    [1, 23],
    [0, 23],
    [0, 23],
    [0, 23],
  ],
  false
);
doTest(
  [
    [0, 21],
    [1, 23],
    [1, 21],
    [1, 23],
  ],
  false
);
doTest(
  [
    [0, 23],
    [1, 21],
    [1, 23],
    [0, 21],
    [1, 22],
    [0, 22],
  ],
  true
);
doTest(
  [
    [0, 23],
    [1, 21],
    [1, 23],
    [0, 21],
  ],
  true
);
doTest(
  [
    [0, 23],
    [1, 21],
    [1, 23],
    [0, 21],
  ],
  true
);
doTest([[0, 23]], false);
doTest(
  [
    [0, 23],
    [1, 23],
  ],
  true
);
doTest(
  [
    [0, 23],
    [1, 22],
  ],
  false
);
doTest([[0, 23]], false);
