function arithmetic(a, b, operator) {
    switch (operator) {
        case ('add'):
            return a + b;
        case ('subtract'):
            return a - b;
        case ('multiply'):
            return a * b;
        case ('divide'):
            return a / b;
    }
}

console.log(arithmetic(1, 2, "add")); //  3
console.log(arithmetic(8, 2, "subtract")); //  6
console.log(arithmetic(5, 2, "multiply")); //  10
console.log(arithmetic(8, 2, "divide")); //  4