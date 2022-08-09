function meeting(x) {
  return x.includes('O') ? x.indexOf('O') : 'None available!';
}

console.log(meeting(['X', 'O', 'X'])); // 1
console.log(meeting(['O', 'X', 'X', 'X', 'X'])); // 0
console.log(meeting(['X', 'X', 'X', 'X', 'X'])); // 'None available!'
