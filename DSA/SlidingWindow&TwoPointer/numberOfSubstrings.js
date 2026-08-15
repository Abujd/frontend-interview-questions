var numberOfSubstrings = function (s) {
    let left = 0, right = 0, odd = 0, count = 0;
    let lastSeen = [-1, -1, -1];

    for (right = 0; right < s.length; right++) {
        let index = s.charCodeAt(right) - 97;

        lastSeen[index] = right;
        if (lastSeen[0] !== -1 &&
            lastSeen[1] !== -1 &&
            lastSeen[2] !== -1) {
            count += Math.min(...lastSeen) + 1;
        }
    }
    return count;

};
let s = "abcabc";
console.log(numberOfSubstrings(s));
