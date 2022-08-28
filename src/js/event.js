function greet(name) {
  return name ? `hello ${name}!` : null;
}

console.log(greet('Niks')); // 'hello Niks!', 'try again'
console.log(greet(null)); // null, 'try again'
