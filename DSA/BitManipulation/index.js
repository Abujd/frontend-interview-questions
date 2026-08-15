// Check if the i-th bit is set
function checkIthBit(n, i) {
    return (n & (1 << i)) !== 0;
}

console.log(checkIthBit(9, 3)); // true


// Set the i-th bit
function setIthBit(n, i) {
    return n | (1 << i);
}

console.log(setIthBit(9, 2)); // 13


// Clear/Delete the i-th bit
function clearIthBit(n, i) {
    return n & ~(1 << i);
}

console.log(clearIthBit(13, 2)); // 9


// Toggle the i-th bit
function toggleIthBit(n, i) {
    return n ^ (1 << i);
}

console.log(toggleIthBit(9, 2)); // 13


// Check if a number is odd
function isOdd(n) {
    return (n & 1) !== 0;
}

console.log(isOdd(5)); // true
console.log(isOdd(6)); // false

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(8));
function countSetBits(n) {
    let count = 0;

    while (n > 0) {
        n = n & (n - 1);
        count++;
    }

    return count;
}

console.log(countSetBits(9));  // 2