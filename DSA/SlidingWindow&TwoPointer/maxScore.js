var maxScore = function (cardPoints, k) {
    let total = 0;
    for (let i = 0; i < k; i++) {
        total += cardPoints[i];
    }
    let leftSum = total, rightsum = 0;
    let n = cardPoints.length;
    for (let i = 0; i < k; i++) {
        leftSum -= cardPoints[k - i - 1];
        leftSum += cardPoints[n - i - 1];
        total = Math.max(leftSum, total);
    }
    return total;
};
var cardPoints = [2, 2, 2], k = 2;
console.log(maxScore(cardPoints, k));

