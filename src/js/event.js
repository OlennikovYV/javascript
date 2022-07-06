function uefaEuro2016(teams, scores) {
  const players = teams.join(' - ');

  return scores[0] === scores[1]
    ? `At match ${players}, teams played draw.`
    : scores[0] > scores[1]
    ? `At match ${players}, ${teams[0]} won!`
    : `At match ${players}, ${teams[1]} won!`;
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])); // 'At match Germany - Ukraine, Germany won!'
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2])); // 'At match Belgium - Italy, Italy won!'
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])); // 'At match Portugal - Iceland, teams played draw.'
