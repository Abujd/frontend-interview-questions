var totalFruitBF = function (fruits) {
    let maxF = 0;
    for (let i = 0; i < fruits.length; i++) {
        let map = {}, currentL = 0;

        for (let j = i; j < fruits.length; j++) {
            map[fruits[j]] = map[fruits[j]] === undefined ? 1 : map[fruits[j]] + 1;

            if (Object.keys(map).length > 2) {
                break;
            }


            currentL += 1;

        }
        maxF = Math.max(maxF, currentL);
    }
    return maxF;
}

var totalFruit = function (fruits) {
    let maxF = 0, left = 0, right = 0, map = {}, currentL = 0;
    while (right < fruits.length) {
        map[fruits[right]] = map[fruits[right]] === undefined ? 1 : map[fruits[right]] + 1;
        if (Object.keys(map).length > 2) {
            map[fruits[left]] = map[fruits[left]] - 1;
            if (map[fruits[left]] === 0) {
                delete map[fruits[left]];
            }
            left++;
        }

        maxF = Math.max(maxF, right - left + 1);
        right++;

    }
    return maxF;

}


let fruits = [3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4];
console.log(totalFruit(fruits));
// fruits = [0, 1, 2, 2];
// console.log(totalFruitBF(fruits));
// fruits = [1, 2, 1];
// console.log(totalFruitBF(fruits));


