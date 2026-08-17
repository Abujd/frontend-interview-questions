/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
    return canAliceWins(stones, 0, true);
};

var canAliceWins = function (stones, sum, aliceTurn) {
    if (stones.length === 0)
        return false;

    if (aliceTurn) {
        for (let i = 0; i < stones.length; i++) {
            const newSum = sum + stones[i];
            if (newSum % 3 === 0) {
                continue;
            }

            const remaining = [...stones];
            remaining.splice(i, 1);
            if (canAliceWins(remaining, newSum, false)) {
                return true;
            }
        }
        return false;
    } else {
        for (let i = 0; i < stones.length; i++) {
            const newSum = sum + stones[i];
            if (newSum % 3 === 0) {
                continue;
            }

            const remaining = [...stones];
            remaining.splice(i, 1);
            if (!canAliceWins(remaining, newSum, true)) {
                return false;
            }
        }
        return true;
    }
}

console.log(stoneGameIX([2, 1]));
