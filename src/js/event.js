function apple(x) {
  const str1 = 'Help yourself to a honeycomb Yorkie for the glovebox.';
  const str2 = "It's hotter than the sun!!";
  return Math.pow(x, 2) < 1000 ? str1 : str2;
}

console.log(apple('50')); // "It's hotter than the sun!!"
console.log(apple(4)); // 'Help yourself to a honeycomb Yorkie for the glovebox.'
