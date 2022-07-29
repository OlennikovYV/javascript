function movie(card, ticket, perc) {
  let percent = perc;
  let systemA = ticket;
  let systemB = card + ticket * percent;
  let count = 1;

  while (systemA <= Math.ceil(systemB)) {
    count += 1;
    percent *= perc;
    systemA += ticket;
    systemB += ticket * percent;
  }

  return count;
}

console.log(movie(500, 15, 0.9)); // 43
console.log(movie(100, 10, 0.95)); // 24
console.log(movie(0, 10, 0.95)); // 2
console.log(movie(881404, 8, 0.32)); // 110177
