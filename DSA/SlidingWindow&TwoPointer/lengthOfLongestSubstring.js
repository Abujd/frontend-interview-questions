var lengthOfLongestSubstringBF = function (s) {
    let stringMap = {};
    let ans = 0, count = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (stringMap[s[j]] === undefined) {
                stringMap[s[j]] = true;
                count++;
            } else {
                ans = Math.max(ans, count);
                count = 0;
                stringMap = {};
                break;
            }
        }
    }
    return ans;

};

var lengthOfLongestSubstring = function (s) {
    let l = 0, r = 0;
    let maxL = 0;
    let map = {};
    while (r < s.length) {
        if (map[s[r]] !== undefined && map[s[r]] >= l) {
            l = map[s[r]] + 1;
        }
        map[s[r]] = r;

        maxL = Math.max(maxL, r - l + 1)
        r++;
    }
    return maxL;
}


let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
