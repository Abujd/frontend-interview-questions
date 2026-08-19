function fractionalKnapsack(W, arr, n) {

    arr.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
    let currWeight = 0;
    let finalValue = 0;

    for (let i = 0; i < n; i++) {
        if (currWeight + arr[i].weight <= W) {
            currWeight += arr[i].weight;
            finalValue += arr[i].value;
        } else {
            let rem = W - currWeight;
            finalValue = finalValue + (arr[i].value / arr[i].weight) * rem;
            break;
        }
    }
    return finalValue;

}
let arr = [
    { value: 100, weight: 20 },
    { value: 60, weight: 10 },
    { value: 120, weight: 30 }
];
let n = 3;
let weight = 50;
console.log(fractionalKnapsack(weight, arr, n));
