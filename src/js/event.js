function evenLast(numbers) {
  const lastNumber = numbers[numbers.length - 1] || 0;

  return (
    lastNumber *
    numbers.reduce((sum, num, index) => {
      if (index % 2 === 0) sum += num;
      return sum;
    }, 0)
  );
}

console.log(evenLast([2, 3, 4, 5])); // 30
