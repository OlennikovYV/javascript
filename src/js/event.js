function cockroachSpeed(s) {
    return Math.floor(s / 0.036);
}

console.log(cockroachSpeed(1.08)); // 30
console.log(cockroachSpeed(1.09)); // 30
console.log(cockroachSpeed(0.59)); // 16
console.log(cockroachSpeed(0.79)); // 21
console.log(cockroachSpeed(0)); // 0