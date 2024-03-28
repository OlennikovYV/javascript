function search(searchTerm) {
  const searchTermLowerCase = searchTerm.toLowerCase();

  return TITLES.filter(title => {
    const string = title.toLowerCase();

    return string.includes(searchTermLowerCase);
  });
}

const TITLES = [
  'The Big Bang Theory',
  'How I Met Your Mother',
  'Dexter',
  'Breaking Bad',
  'Doctor Who',
  'The Hobbit',
  'Pacific Rim',
  'Pulp Fiction',
  'The Avengers',
  'Shining',
];

result = search('ho');

console.log(result.length); // 3
console.log(result); //  ['How I Met Your Mother', 'Doctor Who', 'The Hobbit'],
