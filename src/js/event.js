const seqlist = function (first, c, l) {
  const arithmeticList = [first];
  let currentNumber = first;

  for (let i = 0; i < l - 1; i++) {
    currentNumber += c;
    arithmeticList.push(currentNumber);
  }

  return arithmeticList;
};

console.log(seqlist(0, 1, 20)); // [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
