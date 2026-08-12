function generate(n, curr, result) {
if(n === curr.length){
    result.push(curr);
    return;
}
generate(n, curr + '0', result);

if(curr.length === 0 || curr[curr.length - 1] !== '1'){
    generate(n, curr + '1', result);
}
}

function main() {
    // Input length n
    const n = 3;

    // Array to store results
    const result = [];

    // Start recursion with empty string
    generate(n, "", result);

    // Print results
    console.log(result);
}

main();