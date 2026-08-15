var characterReplacementBF = function (s, k) {
    let maxL = 0;

    for (let i = 0; i < s.length; i++) {
        let maxFreq = 0, stringMap = {};
        for (let j = i; j < s.length; j++) {
            stringMap[s[j]] = stringMap[s[j]] === undefined ? 1 : stringMap[s[j]] + 1;
            maxFreq = Math.max(maxFreq, stringMap[s[j]]);

            let windowSize = j - i + 1;

            let replace = windowSize - maxFreq;

            if (replace <= k) {
                maxL = Math.max(maxL, windowSize);
            }
        }
    }
    return maxL;
};

var characterReplacement = function (s, k) {
    let left = 0, right = 0, maxL = 0, stringMap = {}, maxFreq = 0;
    while (right < s.length) {

        stringMap[s[right]] = stringMap[s[right]] === undefined ? 1 : stringMap[s[right]] + 1;
        maxFreq = Math.max(maxFreq, stringMap[s[right]]);

        let windowSize = right - left + 1;

        let replace = windowSize - maxFreq;
        while (replace > k) {
            stringMap[s[left]] = stringMap[s[left]] - 1;
            left++;
            maxFreq = Math.max(maxFreq, stringMap[s[right]]);
            windowSize = right - left + 1;
            replace = windowSize - maxFreq;
        }
        maxL = Math.max(maxL, windowSize);
        right++;

    }
    return maxL;

}


let s1 = "ABAB", k1 = 2;
console.log(characterReplacement(s1, k1));
let s = "AABABBA", k = 1;
console.log(characterReplacement(s, k));  