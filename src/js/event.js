function reOrdering(text) {
  const arrayText = text.split(' ');

  for (let i = 0; i < arrayText.length; i++) {
    if (arrayText[i][0] == arrayText[i][0].toUpperCase()) {
      const currentElement = arrayText[i];

      arrayText.splice(i, 1);
      arrayText.unshift(currentElement);
    }
  }

  return arrayText.join(' ');
}

console.log(reOrdering('ming Yao')); // 'Yao ming'
console.log(reOrdering('Mano donowana')); // 'Mano donowana'
console.log(reOrdering('wario LoBan hello')); // 'LoBan wario hello'
console.log(reOrdering('bull color pig Patrick'));
// 'Patrick bull color pig'
console.log(reOrdering('jojo ddjajdiojdwo ana G nnibiial'));
// 'G jojo ddjajdiojdwo ana nnibiial'
console.log(
  reOrdering('is one of those rare names that s both exotic and simple Adira')
);
// 'Adira is one of those rare names that s both exotic and simple'
console.log(
  reOrdering('is an older name than annabel Amabel and a lot more distinctive')
);
// 'Amabel is an older name than annabel and a lot more distinctive'
console.log(reOrdering('JoJo')); // 'JoJo'
console.log(reOrdering('a b c d e f g h i j k l m n o p q r s t u v w x y Z'));
// 'Z a b c d e f g h i j k l m n o p q r s t u v w x y'
console.log(reOrdering('a b c d e f g h i j k l m N o p q r s t u v w x y z'));
// 'N a b c d e f g h i j k l m o p q r s t u v w x y z'
