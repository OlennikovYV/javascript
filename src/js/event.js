function tailSwap(arr) {
  const tailFirst = arr[0].split(':');
  const tailEnd = arr[1].split(':');

  return [tailFirst[0] + ':' + tailEnd[1], tailEnd[0] + ':' + tailFirst[1]];
}

console.log(tailSwap(['abc:123', 'cde:456']));
// ['abc:456', 'cde:123']
console.log(tailSwap(['a:12345', '777:xyz']));
// ['a:xyz', '777:12345']
