function sentence(list) {
  return list
    .sort((a, b) => Object.keys(a)[0] - Object.keys(b)[0])
    .reduce((string, word) => {
      string.push(Object.values(word)[0]);
      return string;
    }, [])
    .join(' ');
}

const List = [
  { 4: 'dog' },
  { 2: 'took' },
  { 3: 'his' },
  { '-2': 'Vatsan' },
  { 5: 'for' },
  { 6: 'a' },
  { 12: 'spin' },
];

console.log(sentence(List)); // 'Vatsan took his dog for a spin'
