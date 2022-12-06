// Return an array
function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    const index = i + 1;
    let element = '';
    if (index % 3 === 0) element += 'Fizz';
    if (index % 5 === 0) element += 'Buzz';
    return element === '' ? index : element;
  });
}

console.log(JSON.stringify(fizzbuzz(15)));
// [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
