var guess = 3;

Math.random = () => 0.02;

let lucky_number = Math.floor(Math.random() * 100 + 1);

console.log(lucky_number); // 3
