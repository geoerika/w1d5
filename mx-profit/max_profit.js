const maxProfit = (stockPrices, profit) => {
  if (stockPrices.length === 0 || stockPrices.length === 1) {
    return profit;
  } else {
    let maxProf = -1;
    for (let i = 1; i < stockPrices.length; i++) {
      let prof = stockPrices[i] - stockPrices[0];
      if (prof > 0) {
        maxProf = (prof > maxProf) ? prof : maxProf;
      }
    }
    maxProf = (maxProf > profit) ? maxProf : profit;
    return maxProfit(stockPrices.slice(1), maxProf);
  }
}

console.log(maxProfit([], -1));

console.log(maxProfit([45], -1));

console.log(maxProfit([45, 24], -1));
console.log(maxProfit([45, 24, 35, 31, 40, 38, 11], -1));