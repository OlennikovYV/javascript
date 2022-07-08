var number = function (busStops) {
  const ENTER = 0;
  const EXIT = 1;

  return busStops.reduce((peopleOfBus, people) => {
    peopleOfBus += people[ENTER];
    peopleOfBus -= people[EXIT];
    return peopleOfBus;
  }, 0);
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
), // 5
  console.log(
    number([
      [3, 0],
      [9, 1],
      [4, 10],
      [12, 2],
      [6, 1],
      [7, 10],
    ])
  ), // 17
  console.log(
    number([
      [3, 0],
      [9, 1],
      [4, 8],
      [12, 2],
      [6, 1],
      [7, 8],
    ])
  ), // 21
  console.log(number([[0, 0]])); // 0
