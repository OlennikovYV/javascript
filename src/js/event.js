const rps = (p1, p2) => {
    const player1win = [
        'rockscissors',
        'scissorspaper',
        'paperrock',
    ];

    if (p1 === p2) return 'Draw!';

    return (player1win.includes(p1 + p2)) ? 'Player 1 won!' : 'Player 2 won!';
};

console.log(rps('scissors', 'paper')); // Player 1 won!
console.log(rps('scissors', 'rock')); // Player 2 won!
console.log(rps('paper', 'paper')); // Draw!