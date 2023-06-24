function matchArrays(v, r) {
  return v.filter(v_item => r.includes(v_item)).length;
}

console.log(
  matchArrays(['Perl', 'Closure', 'JavaScript'], ['Go', 'C++', 'Erlang'])
);
// 0

console.log(
  matchArrays(
    ['incapsulation', 'OOP', 'array'],
    ['time', 'propert', 'paralelism', 'OOP']
  )
);
// 1

console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));
// 4
