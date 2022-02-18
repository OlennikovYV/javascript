function greet(name, owner) {
    return `Hello ${name === owner ? 'boss' : 'guest'}`;
}

console.log(greet('Daniel', 'Daniel')); //'Hello boss'
console.log(greet('Greg', 'Daniel')); //'Hello guest'