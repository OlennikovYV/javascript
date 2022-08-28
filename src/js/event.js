function greet(name) {
  return Boolean(name) == true ? `hello ${name}!` : null;
}

console.log(greet('Niks')); // 'hello Niks!', 'try again'
console.log(greet(null)); // null, 'try again'
