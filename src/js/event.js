function calc(num, operator) { return (!operator) ? num : operator(num) }

function zero(operator) { return calc(0, operator) }
function one(operator) { return calc(1, operator) }
function two(operator) { return calc(2, operator) }
function three(operator) { return calc(3, operator) }
function four(operator) { return calc(4, operator) }
function five(operator) { return calc(5, operator) }
function six(operator) { return calc(6, operator) }
function seven(operator) { return calc(7, operator) }
function eight(operator) { return calc(8, operator) }
function nine(operator) { return calc(9, operator) }

function plus(b) { return a => a + b }
function minus(b) { return a => a - b }
function times(b) { return a => a * b }
function dividedBy(b) { return a => a / b }

console.log(seven(times(five())));// 35
console.log(four(plus(nine())));// 13
console.log(six(minus(four())));// 2
console.log(eight(dividedBy(three())));// 2