function getMaxProfit(prices) {
  let minBuyPrice = Infinity;
  let maxProfit = 0;

  prices.forEach(price => {
    if (price < minBuyPrice) {
      minBuyPrice = price;
    }

    const profit = price - minBuyPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  })

  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4]
const maxProfit = getMaxProfit(prices)
console.log(`Max profit: ${maxProfit}`)
