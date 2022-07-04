function generateShape(integer) {
  let square = [];

  for (let i = 0; i < integer; i += 1) {
    square.push('+'.repeat(integer));
  }

  return square.join('\n');
}

console.log(generateShape(8)); // '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++'
