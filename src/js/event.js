let v1 = 50;
let v2 = 100;
let v3 = 150;
let v4 = 200;
let v5 = 2;
let v6 = 250;

function equal1() {
    let a = v1
    let b = v1
    return a + b;
}

function equal2() {
    let a = v4;
    let b = v2;
    return a - b;
}

function equal3() {
    let a = v1;
    let b = v5;
    return a * b;
}

function equal4() {
    let a = v4;
    let b = v5;
    return a / b;
}

function equal5() {
    let a = v6;
    let b = v3;
    return a % b;
}

console.log(equal1()); // 100,"value of a+b is not equal to 100"
console.log(equal2()); // 100,"value of a-b is not equal to 100"
console.log(equal3()); // 100,"value of a*b is not equal to 100"
console.log(equal4()); // 100,"value of a/b is not equal to 100"
console.log(equal5()); // 100,"value of a%b is not equal to 100"