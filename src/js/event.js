function multiples(s1, s2, s3) {
  const maxDivide = s1 > s2 ? s1 : s2;
  const numbers = [];
  let nextNumber = maxDivide;

  while (nextNumber < s3) {
    if (nextNumber % s1 == 0 && nextNumber % s2 == 0) numbers.push(nextNumber);
    nextNumber += maxDivide;
  }

  return numbers;
}

let s1 = 2;
let s2 = 4;
let s3 = 40;
console.log(multiples(s1, s2, s3));
// [4, 8, 12, 16, 20, 24, 28, 32, 36]

s1 = 13;
s2 = 5;
s3 = 800;
console.log(multiples(s1, s2, s3));
// [65, 130, 195, 260, 325, 390, 455, 520, 585, 650, 715, 780]

s1 = 13;
s2 = 15;
s3 = 800;
console.log(multiples(s1, s2, s3));
// [195, 390, 585, 780]

s1 = 17;
s2 = 15;
s3 = 800;
console.log(multiples(s1, s2, s3));
// [255, 510, 765]

s1 = 27;
s2 = 29;
s3 = 2000;
console.log(multiples(s1, s2, s3));
// [783, 1566]
