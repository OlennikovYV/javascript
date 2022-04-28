const greet_abe = () => {
    let name = 'Abe';
    return "Hello, " + name + '!'
};
const greet_ben = () => {
    let name = 'Ben';
    return "Hello, " + name + '!';
}

console.log(greet_abe()); //  'Hello, Abe!', 'greet_abe() is not greeting Abe'
console.log(greet_ben()); //  'Hello, Ben!', 'greet_ben() is not greeting Ben'