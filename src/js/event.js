function sentence(list) {
  return list
    .map(el => Object.entries(el)[0])
    .sort(([a], [b]) => a - b)
    .map(([key, word]) => word)
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
