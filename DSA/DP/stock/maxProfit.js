var maxProfit = function (prices) {

    let minP = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minP) {
            minP = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minP);
        }
    }
    return maxProfit;
}
prices = [1, 2, 3, 4, 5]
console.log(maxProfit(prices));
