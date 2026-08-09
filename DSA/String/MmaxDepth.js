var maxDepth = function (s) {
    let level = 0, c = 0, max = 0;
    for (char of s) {
        if (char === "(") {
            level++;
            max = Math.max(max, level);


        } else if (char === ")") {
            level--;
        }
    }
    return max;
};

let s = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s));