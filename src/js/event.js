function splitShoesLeftRight(list) {
  const leftShoes = [];
  const rightShoes = [];

  list.forEach(shoe => {
    if (shoe[0] == 0) leftShoes.push(shoe[1]);
    if (shoe[0] == 1) rightShoes.push(shoe[1]);
  });

  return [leftShoes, rightShoes];
}

function pairOfShoes(shoes) {
  let countShoe = shoes.length;
  let leftShoes, rightShoes;

  if (countShoe % 2 == 1 || countShoe < 1) return false;

  [leftShoes, rightShoes] = splitShoesLeftRight(shoes);

  if (leftShoes.length !== rightShoes.length) return false;

  leftShoes.sort((a, b) => a - b);
  rightShoes.sort((a, b) => a - b);

  return leftShoes.every((size, index) => size == rightShoes[index]);
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
