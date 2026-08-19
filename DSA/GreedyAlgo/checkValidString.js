var checkValidString = function (s) {
    let maxOpen = 0, minOpen = 0;
    for (char of s) {
        if (char === ")") {
            minOpen--;
            maxOpen--;
        } else if (char === "(") {
            minOpen++;
            maxOpen++;
        } else {
            minOpen--;
            maxOpen++;
        }
        if (maxOpen < 0) return false;
        if (minOpen < 0) minOpen = 0
    }
    return minOpen === 0;
};
let s = "(*)";
console.log(checkValidString(s));
