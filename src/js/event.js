function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let Savings = 0;
  let countMonth = 0;

  while (startPriceOld + Savings < startPriceNew) {
    if (countMonth % 2 === 1) percentLossByMonth += 0.5;
    Savings += savingperMonth;
    startPriceOld -= startPriceOld * (percentLossByMonth / 100);
    startPriceNew -= startPriceNew * (percentLossByMonth / 100);
    countMonth += 1;
  }

  return [countMonth, Math.round(Savings + startPriceOld - startPriceNew)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5)); // [6, 766]
console.log(nbMonths(12000, 8000, 1000, 1.5)); // [0, 4000]
