function array(arr) {
  let array = arr;

  return array.split(',').slice(1, -1).join(' ') || null;
}

console.log(array('1')); //  ''
console.log(array('1,2')); //  ''
console.log(array('1,2,3')); //  '2'
console.log(array('1,2,3,4')); //  '2 3'
console.log(array('1,2,3,4,5')); //  '2 3 4'
