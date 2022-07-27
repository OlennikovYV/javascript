function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  const percent = 0.5;
  let currentSum = 0;
  let countMonth = 0;

  while (startPriceOld + currentSum < startPriceNew) {
    if (countMonth % 2 === 1) percentLossByMonth += percent;
    currentSum += savingperMonth;
    startPriceOld = startPriceOld * ((100 - percentLossByMonth) / 100);
    startPriceNew = startPriceNew * ((100 - percentLossByMonth) / 100);
    countMonth += 1;
  }

  return [countMonth, Math.round(currentSum + startPriceOld - startPriceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5)); // [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5)); // [0, 4000]
